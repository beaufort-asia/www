/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import { LoDashStatic } from "lodash";


var InMemoryCache = require("apollo-cache-inmemory").InMemoryCache;
var ApolloClient = require("apollo-client").ApolloClient;
var gql = require("graphql-tag");
var PrismicLink = require("apollo-link-prismic").PrismicLink;
var _: LoDashStatic = require("lodash");
import { resolve } from 'path';

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://beaufort-asia.prismic.io/graphql"
  }),
  cache: new InMemoryCache()
});

const homeQuery = gql`
{
  allHomes {    
              edges {
                cursor
                node {
                  header_left_rich_text
                  header_left_title
                  header_right_rich_text
                  header_right_title
                  homepageTitle,
                  column1_sections {
                  section {
                    ... on Section {
                      _meta {
                        id
                      }
                      section_title
                    }
                  }
                }
                column2_sections {
                  section {
                    ... on Section {
                      _meta {
                        id
                      }
                      section_title
                    }
                  }
                }
                column3_sections {
                  section {
                    ... on Section {
                      _meta {
                        id
                      }
                      section_title
                    }
                  }
                }
                column4_sections {
                  section {
                    ... on Section {
                      _meta {
                        id
                      }
                      section_title
                    }
                  }
                }
                column5_sections {
                  section {
                    ... on Section {
                      _meta {
                        id
                      }
                      section_title
                    }
                  }
                }
                }
              }
            }
}`;

const articlesQuery = (after) => gql`{
  allArticles(after:"${after}") {
    pageInfo{
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }       
    edges {
      node {
        body {
          ... on ArticleBodyHtml {
            primary {
              html_rich_text
            }
            type
          }
          ... on ArticleBodyVimeo {
            primary {
              vimeo_embed
              vimeo_link_text
              vimeo_thumbnail_image
            }
            type
          }
          ... on ArticleBodyYoutube {
            primary {
              youtube_embed
              youtube_link_text
              youtube_thumbnail_image
            }
            type
          }
          ... on ArticleBodySoundcloud {
            primary {
              soundcloud_embed
            }
            type
          }
          ... on ArticleBodyImage {
            primary {
              image_link_text
              image_file
              image_text_before
              image_text_below
            }
            type
          }
          ... on ArticleBodyLink {
            primary {
              link_text
              link_text_after
              link_text_before
              link_thumbnail
              link_url {
                _linkType
              }
            }
            type
          }
        }
        articleDate
        _meta {
          id
        }
        highlight          
        section {            
          ... on Section {              
            _meta {
              id
            }
          }
        }
      }
    }
  }            
}`;

exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  console.log('creating pages, yaaye!');

  const { data: home } = await client.query({
    fetchPolicy: 'no-cache',
    query: homeQuery
  });

  const allData: any = {};

  do {
    const last = allData.allArticles ? allData.allArticles.pageInfo.endCursor : undefined;
    const { data: articles } = await client.query({
      fetchPolicy: 'no-cache',
      query: articlesQuery(last)
    });
    console.log('merging...', articles.allArticles.edges.length, ' edges', articles);
    _.mergeWith(allData, articles, (obj, src) => {
      if (!(Array.isArray(obj) && Array.isArray(src))) return undefined;
      return obj.concat(src);
    });
  } while (allData.allArticles.pageInfo.hasNextPage);

  _.merge(allData, home);

  console.log('allData: ', allData);
  console.log('articles total: ', allData.allArticles.edges.length);
  createPage({
    path: '/',
    component: resolve(__dirname, './src/templates/home/index.tsx'),
    context: {
      data: {
        prismic: allData
      }
    }
  })
}