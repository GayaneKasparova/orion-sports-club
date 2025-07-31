// scripts/fetch-schema.js
import {buildClientSchema, printSchema} from 'graphql';
import fs from 'fs';
import https from 'https';
import path from 'path';
import {fileURLToPath} from 'url';

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Use your API token directly or from environment
const apiToken = process.env.NEXT_DATOCMS_API_TOKEN || 'be07cbed9d86c55278391da069ecc6';
const environment = process.env.NEXT_DATOCMS_ENVIRONMENT || 'main';

console.log('Fetching DatoCMS schema...');

// GraphQL introspection query
const introspectionQuery = `
query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

// Set up options for DatoCMS GraphQL endpoint
const options = {
    hostname: 'graphql.datocms.com',
    path: environment ? `/environments/${environment}` : '',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
    }
};

// Create the request
const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode !== 200) {
            console.error(`Error: Received status code ${res.statusCode}`);
            console.error(data);
            process.exit(1);
        }

        try {
            const response = JSON.parse(data);

            if (response.errors) {
                console.error('GraphQL errors:', response.errors);
                process.exit(1);
            }

            if (!response.data) {
                console.error('No data returned from introspection query');
                console.error(response);
                process.exit(1);
            }

            // Save the JSON schema with absolute path
            const schemaJsonPath = path.join(rootDir, 'schema.json');
            fs.writeFileSync(schemaJsonPath, JSON.stringify(response.data, null, 2));
            console.log(`Raw schema saved to ${schemaJsonPath}`);

            // Build a GraphQL schema from the introspection result
            const schema = buildClientSchema(response.data);

            // Print the schema in SDL format
            const sdlSchema = printSchema(schema);

            // Write the SDL schema to a file with absolute path
            const schemaGraphqlPath = path.join(rootDir, 'schema.graphql');
            fs.writeFileSync(schemaGraphqlPath, sdlSchema);

            // Delete unused schema.json file 
            fs.unlinkSync(schemaJsonPath);

            console.log(`Schema successfully converted to SDL format (${schemaGraphqlPath})`);

        } catch (error) {
            console.error('Error processing schema:', error);
            process.exit(1);
        }
    });
});

req.on('error', (error) => {
    console.error('Request error:', error);
    process.exit(1);
});

// Send the introspection query
req.write(JSON.stringify({query: introspectionQuery}));
req.end();