/*process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"*/

module.exports = {
  siteMetadata: {
    title: `ProjektEvil`,
    siteUrl: `pjegatsbyjswordpressmain.gatsbyjs.io`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://localhost/graphql"
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
