import React, { useState } from "react";

interface PreviewLoadingProps {
    id: string;
}

export const PreviewLoading: React.FC<PreviewLoadingProps> = ({ id }) => {

    return (
        <div {...{ id }} aria-hidden="true" style={{ display: 'none' }}>
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
    );
};
