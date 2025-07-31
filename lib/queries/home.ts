// src/lib/queries/home.ts
import {graphql} from 'gql.tada';

export const HOMEPAGE_QUERY = graphql(`
    query HomePageQuery($locale: SiteLocale!) {
        homePage {
            _modelApiKey
            aboutUsText(locale: $locale)
            aboutUsTitle(locale: $locale)
            bannerBtnLink
            bannerBtnText(locale: $locale)
            bannerBackgroundImage {
                title(locale: $locale)
                video {
                    alt
                    blurUpThumb
                    blurhash
                    duration
                    framerate
                    mp4Url
                    thumbhash
                    title
                }
                alt
            }
        }
    }
`);

// The type is automatically inferred from the query
export type HomePageData = typeof HOMEPAGE_QUERY;