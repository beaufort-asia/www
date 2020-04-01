import { Fragment } from 'react'
import Head from 'next/head'
import { apiEndpoint } from '../prismic-configuration'
import { PreviewSync } from './PreviewSync';
import { PreviewLoading } from './PreviewLoading';

/**
 * Meta data component
 */
const Meta = () => {
  const repoNameArray = /([^\/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray?.[1];
  const loadingElementId = "prismic-loading-overlay";

  return (
    <Fragment>
      <Head>
        <title>Beaufort</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        {repoName && <PreviewSync {...{ repoName, loadingElementId }} />}
      </Head>
      <PreviewLoading id={loadingElementId} />
    </Fragment>
  )
}

export default Meta;
