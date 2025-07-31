import {executeQuery} from '@datocms/cda-client';
import {TypedDocumentNode} from '@graphql-typed-document-node/core';

export function performRequest<T, V = Record<string, unknown>>(
    query: TypedDocumentNode<T, V>,
    variables?: V,
    options?: RequestOptions
): Promise<T> {
    return executeQuery(query, {
        ...options,
        variables,
        token: process.env.NEXT_DATOCMS_API_TOKEN || '',
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT || '',
    });
}

interface RequestOptions {
    previewMode?: boolean;
    revalidate?: number;
}