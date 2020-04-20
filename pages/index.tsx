import * as React from 'react';
import { GetStaticProps } from 'next';
import { prismicClient } from '../utils/getPrismicClient';
import { HomeDocument, HomeQuery, HomeQueryVariables, Home, ArticlesQuery, ArticlesQueryVariables, ArticlesDocument, Article } from '../graphql/__generated__';
import DefaultLayout, { C1, C2, C3, C4, C5, HL, HR, HT } from '../layouts';
import { getHeader } from '../utils/getHeader';
import { getColumnSections, getArticlesBySectionId } from '../utils/getColumnSections';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import styled from 'styled-components';
import { Column } from '../components/Column';
import _ from 'lodash';
import Footer from '../components/Footer';

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

    return (
        <>
            <DefaultLayout>
                <HeaderLeft values={header.left} />
                <HeaderTitle values={header.title} />
                <HeaderRight values={header.right} />
                <Column1 contentId="column-1-content" values={column1Sections} />
                <Column2 contentId="column-2-content" values={column2Sections} />
                <Column3 contentId="column-3-content" values={column3Sections} />
                <Column4 contentId="column-4-content" values={column4Sections} />
                <Column5 contentId="column-5-content" values={column5Sections} />
            </DefaultLayout>
            <Footer values={home.footer_content} />
        </>
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