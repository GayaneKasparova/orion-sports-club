import {graphql} from 'gql.tada';

export const HOMEPAGE_QUERY = graphql(`
    query HomePageQuery($locale: SiteLocale!) {
        homePage {
            bannerGradientButtonLink
            bannerGradientButtonText(locale: $locale)
            bannerButtonLink
            bannerButtonText(locale: $locale)
            bannerText(locale: $locale)
            bannerTitle(locale: $locale)
            bannerBackgroundImage {
                url
                responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
                    sizes
                    src
                    width
                    height
                    alt
                    title
                    base64
                }
            }
        }
    }
`);

// The type is automatically inferred from the query
export type HomePageData = typeof HOMEPAGE_QUERY;