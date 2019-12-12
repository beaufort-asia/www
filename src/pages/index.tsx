import React, { useEffect, useState } from 'react';
import { Layout, C1, C2, C3, C4, C5, HL, HR, HT } from '../components/Layout';
import { graphql } from "gatsby";
import styled from '@emotion/styled';
import {
  HomeQuery
} from './__generated__/HomeQuery';
import { getHeader } from '../utils/getHeader';
import { getColumnSections } from '../utils/getColumnSections';
import { lt } from '../styles/media';
import { Column } from '../components/Column';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { useMediaQuery } from 'react-responsive';

export const query = graphql`
query HomeQuery {
  prismic {
    allArticles {
      edges {
        node {
          body {
            ... on PRISMIC_ArticleBodyHtml {
              primary {
                html_rich_text
              }
              type
            }
            ... on PRISMIC_ArticleBodyVimeo {
              primary {
                vimeo_embed
                vimeo_link_text
                vimeo_thumbnail_image
              }
              type
            }
            ... on PRISMIC_ArticleBodyYoutube {
              primary {
                youtube_embed
                youtube_link_text
                youtube_thumbnail_image
              }
              type
            }
            ... on PRISMIC_ArticleBodySoundcloud {
              primary {
                soundcloud_embed
              }
              type
            }
            ... on PRISMIC_ArticleBodyImage {
              primary {
                image_link_text
                image_file
                image_text_before
                image_text_below
              }
              type
            }
            ... on PRISMIC_ArticleBodyLink {
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
        }
      }
    }
    allHomes {
      edges {
        node {
          header_left_rich_text
          header_left_title
          header_right_rich_text
          header_right_title
          homepageTitle
        }
      }
    }
    allSections {
      edges {
        node {
          column
          section_title
          section_articles {
            section_article {
              ... on PRISMIC_Article {
                _meta {
                  id
                }
                _linkType
              }
            }
          }
        }
      }
    }
  }
}
`;

interface IndexProps {
  data: HomeQuery;
}

const Index: React.SFC<IndexProps> = ({ data }) => {

  const header = getHeader(data);

  if (!header) return null;

  const column1Sections = getColumnSections(data, 1);
  const column2Sections = getColumnSections(data, 2);
  const column3Sections = getColumnSections(data, 3);
  const column4Sections = getColumnSections(data, 4);
  const column5Sections = getColumnSections(data, 5);

  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  const isMobile = useMediaQuery({
    query: lt.md
  })

  return (
    <Layout>
      <Header values={header.left} css={HL} dash={{ right: !isMobile }} />
      <Title values={header.title} css={HT} dash={{ bottom: isMobile }} />
      <Header values={header.right} css={HR} dash={{ left: true }} />
      <Column values={column1Sections} css={C1} dash={{ top: true, right: true }} ></Column>
      <Column values={column2Sections} css={C2} dash={{ top: true, right: true }} ></Column>
      <Column values={column3Sections} css={C3} dash={{ top: true, right: true }} ></Column>
      <Column values={column4Sections} css={C4} dash={{ top: true, right: true }}></Column>
      <Column values={column5Sections} css={C5} dash={{ top: true }}></Column>
    </Layout>
  );
}

export default Index;
