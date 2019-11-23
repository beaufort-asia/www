module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatbsy + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'beaufort-asia', // (REQUIRED, replace with your own)
        // accessToken: '##########', // (optional API access token)
        // path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        // pages: [{ // (optional, builds pages dynamically)
        //   type: 'Page',         // TypeName from prismic
        //   match: '/pages/:uid',  // Pages will be generated under this pattern
        //   path: '/page',        // Placeholder page for unpublished documents
        //   component: require.resolve('./src/templates/page.js'),
        // }],
      }
    }
  ]
};
