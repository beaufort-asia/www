// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://beaufort-asia.cdn.prismic.io/api'
export const graphqlEndpoint = 'https://beaufort-asia.cdn.prismic.io/graphql'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: any) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc: any) => {
  if (doc.type === 'post') {
    return '/blog/[uid]'
  }
  return '/'
}
