import * as React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { prismicClient } from '../getPrismicClient';
import { HomeQueryDocument, HomeQueryQuery, HomeQueryQueryVariables } from '../graphql/__generated__/components';
import { richText } from '../utils/richText';
import DefaultLayout from '../layouts';
import { destroyCookie } from 'nookies';
import { previewCookie } from 'prismic-javascript';

type Props = { greeting: any };

const Home: NextPage<Props> = ({ greeting }) => <DefaultLayout>
    Hello world! - user agent: {richText(greeting)}
</DefaultLayout>;

export const getStaticProps: GetStaticProps<Props> = async (context) => {

    console.log('Loading home query...');
    if (context.preview) console.log('Running HomeQuery in preview mode!');

    const result = await prismicClient.query<HomeQueryQuery, HomeQueryQueryVariables>({
        query: HomeQueryDocument,
        fetchPolicy: 'no-cache',
        context: context.previewData
    });

    const greeting = result.data.allHomes.edges?.[0]?.node.homepageTitle;

    return {
        props: { greeting }
    };
};

// Home.getInitialProps = async ({ }) => {
//     return { greeting: "bar" }
// }

export default Home;