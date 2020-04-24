import { Fragment } from 'react'
import Head from 'next/head'
import { apiEndpoint } from '../prismic-configuration'
import { PreviewSync } from './PreviewSync';
import { PreviewLoading } from './PreviewLoading';

declare var dataLayer: any;
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-27468128-1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-27468128-1');
        `
        }} />
        <title>Beaufort</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        {repoName && <PreviewSync {...{ repoName, loadingElementId }} />}
      </Head>
      <PreviewLoading id={loadingElementId} />
    </Fragment>
  )
}

export default Meta;
