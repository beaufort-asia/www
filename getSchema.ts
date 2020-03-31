import apolloConfig from './apollo.config';
import { writeFile } from 'fs';
import { promisify } from 'util';
import { introspectionQuery } from 'graphql';
import qgl from 'graphql-tag';
import { prismicClient } from './getPrismicClient';

const _writeFile = promisify(writeFile);

const getSchema = async () => {

    const result = await prismicClient.query({
        query: qgl`${introspectionQuery}`,
    });

    await _writeFile(apolloConfig.client.service.localSchemaFile, JSON.stringify(result.data, null, 2));
    console.log('Done!');
}

getSchema();