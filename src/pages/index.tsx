import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { Layout, C1, C2, C3, C4, C5, HL, HR, HT } from '../components/Layout';
import { graphql } from "gatsby";
import styled from '@emotion/styled';
import {
  HomeQuery
} from './__generated__/HomeQuery';
import { getHeader } from '../utils/getHeader';
import { getColumnSections } from '../utils/getColumnSections';
import { mq, lt } from '../styles/media';
import { Column } from '../components/Column';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { useMediaQuery } from 'react-responsive';

export const query = graphql`
query HomeQuery {
  prismic {
    allHomes {
    edges {
      node {
        homepageTitle,
        header_left_title,
        header_left_rich_text,
        header_right_title,
        header_right_rich_text
      }
    }
  }
  allSections {
    edges {
      node {
        section_title,
        column,
        section_articles {
          section_article {
            ... on PRISMIC_Article {
              articleDate,
              highlight,
              body {
                ... on PRISMIC_ArticleBodyHtml {
                  type,
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
