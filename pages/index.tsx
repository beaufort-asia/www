import * as React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { prismicClient } from '../getPrismicClient';
import { HomeDocument, HomeQuery, HomeQueryVariables } from '../graphql/__generated__';
import { richText } from '../utils/richText';
import DefaultLayout from '../layouts';

type Props = { greeting: any };

const Home: NextPage<Props> = ({ greeting }) => <DefaultLayout>
    {richText(greeting)}
</DefaultLayout>;

export const getStaticProps: GetStaticProps<Props> = async (context) => {

    const result = await prismicClient.query<HomeQuery, HomeQueryVariables>({
        query: HomeDocument,
        fetchPolicy: 'no-cache',
        context: context.previewData
    });

    const greeting = result.data.allHomes.edges?.[0]?.node.homepageTitle;

    return {
        props: { greeting }
    };
};

export default Home;