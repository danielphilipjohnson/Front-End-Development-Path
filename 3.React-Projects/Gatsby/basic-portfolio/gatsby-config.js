module.exports = {
  siteMetadata: {
    title: `Gatsby Portfolio Basic`,
    description: `React Developer for CodeCareer. My goal is to help others get their first programming job. Lets talk: #reactjs #js #css`,
    author: `@gatsbyjs`,
    profileImage:
      "https://pbs.twimg.com/profile_images/1339602638111830020/k0dGL2Ye_400x400.png",
    githubLink: "https://github.com/danielphilipjohnson",
    twitterLink: "https://twitter.com/danielp_johnson",
    linkedinLink: "https://www.linkedin.com/in/daniel-philip-johnson/",
    codepenLink: "https://codepen.io/danielphilipjohnson/",
    stackoverflowLink:
      "https://stackoverflow.com/users/13921677/daniel-philip-johnson",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
