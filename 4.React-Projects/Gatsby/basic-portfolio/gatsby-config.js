module.exports = {
  siteMetadata: {
    title: `Daniel Philip Johnson`,
    titleTemplate: "React Developer · %s",
    url: "http://danielphilipjohnson.me/",
    image: "images/banner.png",
    twitterUsername: "@danielp_johnson",
    author: `Daniel Philip Johnson`,
    description: `Front-End Engineer for CodeCareer who specialises in React developer, graphql, Node, express and MongoDB.`,
    keywords:
      "Front-End Engineer, Front-End Engineer, english, UK, London, web development, reactjs, nodejs, graphql",
    twitterImage: "images/banner.png",
    facebookImage: "images/banner.png",
    profileImage:
      "https://pbs.twimg.com/profile_images/1339602638111830020/k0dGL2Ye_400x400.png",
    socials: [
      {
        link: "https://github.com/danielphilipjohnson",
        FontAwesomeIcon: {
          type: "fab",
          logo: "github",
        },
      },
      {
        link: "https://twitter.com/danielp_johnson",
        FontAwesomeIcon: {
          type: "fab",
          logo: "twitter",
        },
      },
      {
        link: "https://www.linkedin.com/in/daniel-philip-johnson/",
        FontAwesomeIcon: {
          type: "fab",
          logo: "linkedin",
        },
      },
      {
        link: "https://codepen.io/danielphilipjohnson/",
        FontAwesomeIcon: {
          type: "fab",
          logo: "codepen",
        },
      },
      {
        link: "https://stackoverflow.com/users/13921677/daniel-philip-johnson",
        FontAwesomeIcon: {
          type: "fab",
          logo: "stack-overflow",
        },
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daniel Philip Johnson`,
        short_name: `Daniel Johnson`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#1A011E`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/apple-icon-57x57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-60x60.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-76x76.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-114x114.png`,
            sizes: `114x114`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-120x120.png`,
            sizes: `120x120`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-icon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: "/images/icon.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/about`, `/blog/*`],
      },
    },

    `gatsby-plugin-offline`,
  ],
}
