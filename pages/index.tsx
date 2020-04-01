import * as React from 'react';
import { GetStaticProps } from 'next';
import { prismicClient } from '../utils/getPrismicClient';
import { HomeDocument, HomeQuery, HomeQueryVariables, Home, ArticlesQuery, ArticlesQueryVariables, ArticlesDocument, Article } from '../graphql/__generated__';
import DefaultLayout, { C1, C2, C3, C4, C5, HL, HR, HT, HH } from '../layouts';
import { getHeader } from '../utils/getHeader';
import { getColumnSections, getArticlesBySectionId } from '../utils/getColumnSections';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { lt } from '../styles/media';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { DashRow } from '../components/DashBox';
import ReactResizeDetector from "react-resize-detector";
import styled from 'styled-components';
import { Column } from '../components/Column';
import _ from 'lodash';

interface HomeProps {
    home: Home;
    articles: Article[];
}

const Column1 = styled(Column)`${C1}`;
const Column2 = styled(Column)`${C2}`;
const Column3 = styled(Column)`${C3}`;
const Column4 = styled(Column)`${C4}`;
const Column5 = styled(Column)`${C5}`;
const HeaderLeft = styled(Header)`${HL}`;
const HeaderTitle = styled(Title)`${HT}`;
const HeaderRight = styled(Header)`${HR}`;
const Horizontal = styled(DashRow)`${HH}`;

const Index: React.SFC<HomeProps> = (props) => {
    const { home, articles } = props;

    const header = getHeader(home);

    if (!header) return null;

    const articlesBySectionId = getArticlesBySectionId(articles);
    const column1Sections = getColumnSections(articlesBySectionId, home.column1_sections!);
    const column2Sections = getColumnSections(articlesBySectionId, home.column2_sections!);
    const column3Sections = getColumnSections(articlesBySectionId, home.column3_sections!);
    const column4Sections = getColumnSections(articlesBySectionId, home.column4_sections!);
    const column5Sections = getColumnSections(articlesBySectionId, home.column5_sections!);

    const isMobile = useMediaQuery({
        query: lt.md
    })

    const [c1Height, setC1Height] = useState(0);
    const [c2Height, setC2Height] = useState(0);
    const [c3Height, setC3Height] = useState(0);
    const [c4Height, setC4Height] = useState(0);
    const [c5Height, setC5Height] = useState(0);

    return (
        <DefaultLayout>
            <HeaderLeft values={header.left} dash={{ right: c1Height >= c2Height }} />
            <HeaderTitle values={header.title} dash={{
                left: !isMobile && c2Height > c1Height,
                bottom: isMobile,
                right: c4Height >= c5Height && !isMobile
            }} />
            <HeaderRight values={header.right} dash={{ left: c5Height > c4Height }} />
            <Horizontal dash={{ bottom: true }} />
            <ReactResizeDetector handleHeight={true} querySelector={"#column-1-content"} onResize={(width, height) => setC1Height(height)} />
            <ReactResizeDetector handleHeight={true} querySelector={"#column-2-content"} onResize={(width, height) => setC2Height(height)} />
            <ReactResizeDetector handleHeight={true} querySelector={"#column-3-content"} onResize={(width, height) => setC3Height(height)} />
            <ReactResizeDetector handleHeight={true} querySelector={"#column-4-content"} onResize={(width, height) => setC4Height(height)} />
            <ReactResizeDetector handleHeight={true} querySelector={"#column-5-content"} onResize={(width, height) => setC5Height(height)} />
            <Column1 contentId="column-1-content" {...{ isMobile }} dash={{ top: false, right: c1Height >= c2Height && !isMobile }} values={column1Sections} />
            <Column2 contentId="column-2-content" {...{ isMobile }} dash={{ top: false, left: c2Height > c1Height, right: c2Height >= c3Height && !isMobile }} values={column2Sections} />
            <Column3 contentId="column-3-content" {...{ isMobile }} dash={{ top: false, left: c3Height > c2Height, right: c3Height >= c4Height && !isMobile }} values={column3Sections} />
            <Column4 contentId="column-4-content" {...{ isMobile }} dash={{ top: false, left: c4Height > c3Height, right: c4Height >= c5Height && !isMobile }} values={column4Sections} />
            <Column5 contentId="column-5-content" {...{ isMobile }} dash={{ top: false, left: c5Height > c4Height }} values={column5Sections} />
        </DefaultLayout>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {

    const { data: homeQuery } = await prismicClient.query<HomeQuery, HomeQueryVariables>({
        query: HomeDocument,
        fetchPolicy: 'no-cache',
        context: context.previewData
    });

    const articlesQuery: ArticlesQuery = {} as ArticlesQuery;

    do {
        const last = articlesQuery.allArticles?.pageInfo?.endCursor;
        const { data } = await prismicClient.query<ArticlesQuery, ArticlesQueryVariables>({
            query: ArticlesDocument,
            fetchPolicy: 'no-cache',
            variables: {
                after: last || ''
            },
            context: context.previewData
        });

        _.mergeWith(articlesQuery, data, (obj, src) => {
            if (!(Array.isArray(obj) && Array.isArray(src))) return undefined;
            return obj.concat(src);
        });
    } while (articlesQuery.allArticles.pageInfo.hasNextPage);

    const props: HomeProps = {
        home: homeQuery.allHomes?.edges?.[0]?.node as Home,
        articles: (articlesQuery.allArticles.edges?.map(a => a?.node) || []) as Article[]
    };

    homeQuery.allHomes.edges

    return {
        props
    };
};

export default Index;