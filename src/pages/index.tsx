import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { Layout } from '../components/Layout';
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";

export const query = graphql`
  query MyQuery {
    prismic {
      allHomes {
        edges {
          node {
            title
          }
        }
      }
    }
  }
`;

interface IndexProps {
  data: {
    prismic: {
      allHomes: {
        edges: {
          node: {
            title: any;
          }
        }[]
      }
    }
  }
}

const Index: React.SFC<IndexProps> = ({ data }) => {

  console.log(data);
  const doc = data.prismic.allHomes.edges[0].node;
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
        render={doc.title}
        linkResolver={linkResolver}
      />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </Layout>
  );
}

export default Index;
