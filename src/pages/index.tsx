import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { Layout } from '../components/Layout';
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";
import styled from '@emotion/styled';
import {
  HomeQuery
} from './__generated__/HomeQuery';

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


`;;

interface IHeaderProps {
  home: any;
}

const Header: React.FC<IHeaderProps> = ({ home }) => {

  return (
    <div>

    </div>
  );
};

const Columns = styled.div``;

interface IColumn {
  sections: ISection[];
}

interface ISection {
  title: string;
  articles: IArticle[];
}

interface IArticle {
  date: Date;
  highlight: boolean;
  body: [];
}

interface IHeader {
  title: string;
  body: [];
}

interface IndexProps {
  data: HomeQuery;
}

const getSection = (section: any): ISection => ({
  title: section.section_title,
  articles: section.section_articles
    .map(articles => articles.section_article)
    .map(getArticle)
})

const getArticle = (article: any): IArticle => {

  return ({
    date: new Date(),
    highlight: false,
    body: []
  })
}

const getColumnSections = (data: HomeQuery, column: number) =>
  data.prismic.allSections!.edges!.map(edge => edge!.node!)
    .filter(section => section.column === column.toString())
    .map(getSection);

const Index: React.SFC<IndexProps> = ({ data }) => {

  const home = data.prismic.allHomes.edges?.[0]?.node;

  if (!home) return null;

  const column1Sections = getColumnSections(data, 1);

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
      <Header {...{ home }} />
      <Columns>
        {/* <Column />
        <Column />
        <Column />
        <Column />
        <Column /> */}
      </Columns>
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </Layout>
  );
}

export default Index;
