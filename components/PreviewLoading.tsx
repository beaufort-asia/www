import React, { useState } from "react";

interface PreviewLoadingProps {
    id: string;
}

export const PreviewLoading: React.FC<PreviewLoadingProps> = ({ id }) => {

    return (
        <div {...{ id }} aria-hidden="true" style={{ display: 'none', zIndex: 1, position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(255,255,255,0.75)' }}>
            <div style={{ display: 'flex', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}>
                <div tabIndex={-1} data-micromodal-close style={{ backgroundColor: 'white', padding: '20px', border: '2px solid lightgrey', borderRadius: '6px' }}>
                    <div role="dialog" aria-modal="true" aria-labelledby="modal-1-title" >
                        <header>
                            <h2 id="modal-1-title">
                                Loading prismic preview mode...
        </h2>
                            {/* <button aria-label="Close modal" data-micromodal-close></button> */}
                        </header>
                        <div id="modal-1-content">
                            Just hold on a second...
      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
