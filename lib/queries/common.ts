// src/lib/queries/common.ts
export const SEO_FRAGMENT = `
  fragment SeoFields on SeoField {
    title
    description
    twitterCard
    image {
      url
      width
      height
      alt
    }
  }
`