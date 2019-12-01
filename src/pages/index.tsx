import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { Layout } from '../components/Layout';
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";
import { MyQuery } from './__generated__/MyQuery';

export const query = graphql`
  query MyQuery {
  prismic {
    allHomes {
      edges {
        node {
          column_1_sections {
            column_1_section {
              _linkType
              ... on PRISMIC_Section {
                section_title
                _linkType
                section_articles {
                  section_article {
                    _linkType
                    ... on PRISMIC_Article {
                      articleDate
                      highlight
                      _meta {
                        id
                      }
                      _linkType
                      body {
                        ... on PRISMIC_ArticleBodyHtml {
                          type
                          label
                          primary {
                            html_rich_text
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          header_left_rich_text
          header_left_title
          header_right_rich_text
          header_right_title
          homepageTitle
        }
      }
    }
  }
}

`;

interface IndexProps {
  data: MyQuery
}

const Index: React.SFC<IndexProps> = ({ data }) => {

  const doc = data.prismic.allHomes.edges?.[0]?.node;
  console.log(doc?.column_1_sections?.[0].column_1_section);
  if (!doc) return null;

  const [date, setDate] = useState<string | null>(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <Layout>
      <RichText
        render={doc.homepageTitle}
        linkResolver={linkResolver}
      />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </Layout>
  );
}

export default Index;
