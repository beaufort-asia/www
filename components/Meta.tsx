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

          (function syncPrismicAndNextPreviews() {

            function getCookieValue(key) {              
              const cookieMatcher = new RegExp("(?:(?:^|.*;\\\\s*)" + key + "\\\\s*\\\\=\\\\s*([^;]*).*$)|^.*$");
              return document.cookie.replace(cookieMatcher, \"$1\");
            }
            
            const prismicCookieValue = getCookieValue("io.prismic.preview");            
            const decodedCookieValue = decodeURIComponent(prismicCookieValue);            
            const prismic = decodedCookieValue !== "" ? JSON.parse(decodedCookieValue) : {};            
            const prismicSiteKey = "${repoName}.prismic.io";
            const prismicSite = prismic[prismicSiteKey];
                               
            const isEntering = getCookieValue("expectPrismicPreview") === "entering";
            const isEntered = getCookieValue("expectPrismicPreview") === "entered";
            const hasPrismicPreview = !!prismicSite && !!prismicSite.preview;
            
            if (hasPrismicPreview) {
              if (isEntering) {                
                // Set entered in cookie here.
                document.cookie = "expectPrismicPreview=entered; path=/";
                console.log('Entered prismic preview mode...');
              }
              else if (isEntered) {
                console.log('Currently in prismic preview mode...');
              }
              else {
                console.log('Nextjs preview was deactivated by the user or expired, but prismic preview is still activated.');                
                console.log('Reactivating nextjs preview...');
                window.location.replace('/api/preview?token='+encodeURIComponent(prismicSite.preview));
              }
            }
            else {
              if (isEntering) {
                console.log('Waiting to enter prismic preview mode...');                
                
                document.addEventListener("DOMContentLoaded", function(event) { 
                  const loader = document.getElementById("modal-1")
                  console.log(loader);
                  if(loader) {
                    loader.style.display = "block";
                  }  
                });

              }
              else if (isEntered) {
                console.log('Prismic preview was deactivated by the user or expired, but nextjs preview is still activated.');
                console.log('Deactivating nextjs preview...');                
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
      <div id="modal-1" aria-hidden="true" style={{ display: 'none' }}>
        <div tabIndex={-1} data-micromodal-close>
          <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
            <header>
              <h2 id="modal-1-title">
                Loading prismic preview mode...
        </h2>
              <button aria-label="Close modal" data-micromodal-close></button>
            </header>
            <div id="modal-1-content">
              Just hold on a second...
      </div>
          </div>
        </div>
      </div>
      {/* <style jsx global > {reset} </style>
      <style jsx global > {globals} </style> */}
    </Fragment>
  )
}

export default Meta
