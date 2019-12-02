import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { Layout } from '../components/Layout';
import { graphql } from "gatsby";
import styled from '@emotion/styled';
import {
  HomeQuery
} from './__generated__/HomeQuery';
import { getHeader } from '../utils/getHeader';
import { getColumnSections } from '../utils/getColumnSections';
import { Header } from '../components/Header';
import { Column } from '../components/Column';

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

const Columns = styled.div``;

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
  return (
    <Layout>
      <Header values={header} />
      <Columns>
        <Column values={column1Sections} />
        <Column values={column2Sections} />
        <Column values={column3Sections} />
        <Column values={column4Sections} />
        <Column values={column5Sections} />
      </Columns>
      {/* <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p> */}
    </Layout>
  );
}

export default Index;
