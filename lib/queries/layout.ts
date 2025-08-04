import {graphql} from 'gql.tada';

export const LAYOUT_QUERY = graphql(`
    query LayoutQuery($locale: SiteLocale!) {
        allNavLinks(locale: $locale) {
            openInNewTab
            hide
            url
            label
        }
        global {
            logo {
                url
            }
        }
    }
`);

// The type is automatically inferred from the query
export type Layout = typeof LAYOUT_QUERY;
export type NavItem = {
    hide?: boolean,
    openInNewTab?: boolean
    label: string,
    url: string
}