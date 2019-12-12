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
import { DashBox, DashColumn, DashRow } from '../styles/DashBox';
import { mq } from '../styles/media';

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

const SideGroup = styled(DashColumn)`
  width: 20%;
`;

const MainGroup = styled(DashColumn)`
  width: 60%;
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

  const HL = styled.div`border: 1px solid gray; grid-area: hL;`;
  const HR = styled.div`border: 1px solid gray; grid-area: hR;`;
  const HT = styled.div`border: 1px solid gray; grid-area: hT;`;
  const C1 = styled.div`border: 1px solid gray; grid-area: c1;`;
  const C2 = styled.div`border: 1px solid gray; grid-area: c2;`;
  const C3 = styled.div`border: 1px solid gray; grid-area: c3;`;
  const C4 = styled.div`border: 1px solid gray; grid-area: c4;`;
  const C5 = styled.div`border: 1px solid gray; grid-area: c5;`;

  const Grid = styled.div`
  
    display: grid;
    grid-template-areas:
      "hL hT hT hT hR"
      "c1 c2 c3 c4 c5";
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    ${mq.lt.md`
      grid-template-areas:
        "hT hT"
        "hL hR"
        "c1 c1"
        "c2 c2"
        "c3 c3"
        "c4 c4"
        "c5 c5";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    `}
  
  `;

  return (
    <Layout>
      <Grid>
        <HL>Left</HL>
        <HR>Right</HR>
        <HT>Title</HT>
        <C1>Column 1</C1>
        <C2>Column 2</C2>
        <C3>Column 3</C3>
        <C4>Column 4</C4>
        <C5>Column 5</C5>
      </Grid>
      {/* <Header values={header} /> */}
      {/* <DashRow>
        <Column values={column1Sections} />
        <Column values={column2Sections} />
        <Column values={column3Sections} />
        <Column values={column4Sections} />
        <Column values={column5Sections} />
      </DashRow> */}
      {/* <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p> */}
    </Layout>
  );
}

export default Index;
