import React, { useState } from "react";

import styled from "@emotion/styled";

import Helmet from "react-helmet";

import { Global, css } from "@emotion/core";
import emotionNormalize from 'emotion-normalize';

// ...



const Main = styled.main`
    width: 960px;
`

interface ILayoutProps {
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
        <>
            <Helmet>
                <title>Beaufort</title>
            </Helmet>
            <Global
                styles={css`
                ${emotionNormalize}
                html,
                body {
                padding: 0;
                margin: 0;
                background: white;
                min-height: 100%;
                font-family: Helvetica, Arial, sans-serif;
                }
            `}
            />
            <Main>{children}</Main>
        </>
    );
};
