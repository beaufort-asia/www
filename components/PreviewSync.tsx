import React from 'react';

type PreviewSyncProps = {
  repoName: string;
  loadingElementId?: string;
};

export const PreviewSync: React.FC<PreviewSyncProps> = ({ repoName, loadingElementId }) => <script lang="javascript" dangerouslySetInnerHTML={{
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
              
              ${loadingElementId && `
                document.addEventListener("DOMContentLoaded", function(event) { 
                  const loader = document.getElementById("${loadingElementId}")
                  console.log(loader);
                  if(loader) {
                    loader.style.display = "block";
                  }  
                });
              `}

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
}} />;
