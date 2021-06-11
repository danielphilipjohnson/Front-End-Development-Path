import React from "react"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, article }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: "image",
          content: seo.image,
        },
        {
          property: "og:url",
          content: seo.url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: "og:image",
          content: seo.image,
        },

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: "twitter:image",
          content: seo.image,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: "Daniel Philip Johnson",
  description: ``,
  image: "",
  article: false,
  meta: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,

  article: PropTypes.bool,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        defaultDescription: description
        facebookImage
        defaultImage: image
        keywords
        profileImage
        titleTemplate
        defaultTitle: title
        twitterImage
        siteUrl: url
        twitterUsername
      }
    }
  }
`
