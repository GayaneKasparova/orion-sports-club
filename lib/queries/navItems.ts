import {graphql} from 'gql.tada';

export const NAV_ITEMS_QUERY = graphql(`
    query NavItemsQuery($locale: SiteLocale!) {
        allNavLinks(locale: $locale) {
            openInNewTab
            hide
            url
            label
    }}
`);

// The type is automatically inferred from the query
export type NavItems = typeof NAV_ITEMS_QUERY;
export type NavItem = {
    hide?: boolean,
    openInNewTab?: boolean
    label: string,
    url: string
}