import { Fragment } from 'react'
import Head from 'next/head'
import { apiEndpoint } from '../prismic-configuration'
// import { reset, globals } from 'styles'

/**
 * Meta data component
 */
const Meta = () => {
  const repoNameArray = /([^\/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray?.[1];

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        <script lang="javascript" dangerouslySetInnerHTML={{
          __html: `

          (function checkPreviewCookies() {

            function getCookieValue(key) {              
              const cookieMatcher = new RegExp("(?:(?:^|.*;\\\\s*)" + key + "\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$");
              return document.cookie.replace(cookieMatcher, \"$1\");
            }
            
            const previewCookieValue = getCookieValue("io.prismic.preview");
            // console.log('value', previewCookieValue);
            const decodedCookieValue = decodeURIComponent(previewCookieValue);
            // console.log('decoded', decodedCookieValue);
            const prismic = decodedCookieValue !== "" ? JSON.parse(decodedCookieValue) : {};
            // console.log('prismic object', prismic);
            const previewKey = "${repoName}.prismic.io";
                               
            const isEntering = getCookieValue("expectPrismicPreview") === "entering";
            const isEntered = getCookieValue("expectPrismicPreview") === "entered";
            const hasPrismicPreview = !!prismic[previewKey] && !!prismic[previewKey].preview;
            
            if (hasPrismicPreview) {
              if (isEntering) {
                console.log('Entered prismic preview mode...');
                // Set entered in cookie here.
                document.cookie = "expectPrismicPreview=entered; path=/";
              }
              else if (isEntered) {
                console.log('Currently in prismic preview mode...');
              }
              else {
                console.log('Nextjs preview was deactivated by the user or expired, but prismic preview is still activated.');
                // Re-activate preview mode in nextjs api.
                const previewToken = prismic[previewKey].preview;
                // console.log('token', previewToken);
                window.location.replace('/api/preview?token='+encodeURIComponent(previewToken));
              }
            }
            else {
              if (isEntering) {
                console.log('Waiting to enter prismic preview mode...');                
              }
              else if (isEntered) {
                console.log('Prismic preview was deactivated by the user or expired, but nextjs preview is still activated.');
                // Deactivate nextjs preview by calling /api/preview-clear.
                window.location.replace('/api/preview-clear');
              }
              else {
                // console.log('In static viewing mode.');
                // Do nothing.
              }
            }
          })();
          
          `
        }} />
      </Head>
      {/* <style jsx global > {reset} </style>
      <style jsx global > {globals} </style> */}
    </Fragment>
  )
}

export default Meta
