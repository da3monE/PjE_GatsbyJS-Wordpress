process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1"

module.exports = {
  siteMetadata: {
    title: `ProjektEvil`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https:/graphql",
      baseUrl: process.env.API_URL,

        protocol: process.env.API_PROTOCOL,

        hostingWPCOM: false,

        useACF: true,

        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
          "**/portfolio",
          "**/services",
          "**/qualifications",
          "**/gallery",
          "**/logo",
          "**/location",
        ],
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
