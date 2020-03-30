import React, { useEffect, useState } from 'react';
import { Layout, C1, C2, C3, C4, C5, HL, HR, HT, HH } from '../../components/Layout';

import { getHeader } from '../../utils/getHeader';
import { getColumnSections, getArticlesBySectionId } from '../../utils/getColumnSections';
import { lt } from '../../styles/media';
import { Column } from '../../components/Column';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { useMediaQuery } from 'react-responsive';
import { DashRow } from '../../styles/DashBox';
import ReactResizeDetector from "react-resize-detector";
import { HomeQuery } from './HomeQuery';

interface HomeProps {
  pageContext: {
    data: HomeQuery;
  }
}

const Home: React.SFC<HomeProps> = (props) => {
  const { data } = props.pageContext;
  console.log('props: ', props);
  const header = getHeader(data);

  if (!header) return null;
  const home = data.prismic.allHomes.edges![0]?.node!;
  const articlesBySectionId = getArticlesBySectionId(data);
  const column1Sections = getColumnSections(articlesBySectionId, home.column1_sections!);
  const column2Sections = getColumnSections(articlesBySectionId, home.column2_sections!);
  const column3Sections = getColumnSections(articlesBySectionId, home.column3_sections!);
  const column4Sections = getColumnSections(articlesBySectionId, home.column4_sections!);
  const column5Sections = getColumnSections(articlesBySectionId, home.column5_sections!);

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
        right: c4Height >= c5Height && !isMobile
      }} />
      <Header values={header.right} css={HR} dash={{ left: c5Height > c4Height }} />
      <DashRow css={HH} dash={{ bottom: true }} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-1-content"} onResize={(width, height) => setC1Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-2-content"} onResize={(width, height) => setC2Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-3-content"} onResize={(width, height) => setC3Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-4-content"} onResize={(width, height) => setC4Height(height)} />
      <ReactResizeDetector handleHeight={true} querySelector={"#column-5-content"} onResize={(width, height) => setC5Height(height)} />
      <Column contentId="column-1-content" {...{ isMobile }} dash={{ top: false, right: c1Height >= c2Height && !isMobile }} values={column1Sections} css={C1}></Column>
      <Column contentId="column-2-content" {...{ isMobile }} dash={{ top: false, left: c2Height > c1Height, right: c2Height >= c3Height && !isMobile }} values={column2Sections} css={C2}></Column>
      <Column contentId="column-3-content" {...{ isMobile }} dash={{ top: false, left: c3Height > c2Height, right: c3Height >= c4Height && !isMobile }} values={column3Sections} css={C3}></Column>
      <Column contentId="column-4-content" {...{ isMobile }} dash={{ top: false, left: c4Height > c3Height, right: c4Height >= c5Height && !isMobile }} values={column4Sections} css={C4}></Column>
      <Column contentId="column-5-content" {...{ isMobile }} dash={{ top: false, left: c5Height > c4Height }} values={column5Sections} css={C5}></Column>
    </Layout>
  );
}

export default Home;
