import { graphqlEndpoint as uri } from '../prismic-configuration';
import { PrismicLink } from 'apollo-link-prismic';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = new PrismicLink({ uri });

export const prismicClient = new ApolloClient({ link, cache: new InMemoryCache() });
