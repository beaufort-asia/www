import React, { useEffect, useState } from 'react';
import { Layout, C1, C2, C3, C4, C5, HL, HR, HT, HH } from '../components/Layout';
import { graphql } from "gatsby";
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
import { DashRow } from '../styles/DashBox';
import ReactResizeDetector from "react-resize-detector";

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
          section {            
            ... on PRISMIC_Section {              
              _meta {
                id
              }
            }
          }
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
          _meta {
            id
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

  const [c1Height, setC1Height] = useState(0);
  const [c2Height, setC2Height] = useState(0);
  const [c3Height, setC3Height] = useState(0);
  const [c4Height, setC4Height] = useState(0);
  const [c5Height, setC5Height] = useState(0);

  return (
    <Layout>
      <Header values={header.left} css={HL} dash={{ right: c1Height >= c2Height }} />
      <Title values={header.title} css={HT} dash={{
        left: !isMobile && c2Height > c1Height,
        bottom: isMobile,
        right: c4Height >= c5Height
      }} />
      <Header values={header.right} css={HR} dash={{ left: c5Height > c4Height }} />
      <DashRow css={HH} dash={{ bottom: true }} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-1-content"} onResize={(width, height) => setC1Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-2-content"} onResize={(width, height) => setC2Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-3-content"} onResize={(width, height) => setC3Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-4-content"} onResize={(width, height) => setC4Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-5-content"} onResize={(width, height) => setC5Height(height)} />
      <Column contentId="column-1-content" {...{ isMobile }} dash={{ top: false, right: c1Height >= c2Height }} values={column1Sections} css={C1}></Column>
      <Column contentId="column-2-content" {...{ isMobile }} dash={{ top: false, left: c2Height > c1Height, right: c2Height >= c3Height }} values={column2Sections} css={C2}></Column>
      <Column contentId="column-3-content" {...{ isMobile }} dash={{ top: false, left: c3Height > c2Height, right: c3Height >= c4Height }} values={column3Sections} css={C3}></Column>
      <Column contentId="column-4-content" {...{ isMobile }} dash={{ top: false, left: c4Height > c3Height, right: c4Height >= c5Height }} values={column4Sections} css={C4}></Column>
      <Column contentId="column-5-content" {...{ isMobile }} dash={{ top: false, left: c5Height > c4Height }} values={column5Sections} css={C5}></Column>
    </Layout>
  );
}

export default Index;
