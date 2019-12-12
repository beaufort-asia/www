import React, { useState } from "react";

import styled from "@emotion/styled";

import Helmet from "react-helmet";

import { Global, css } from "@emotion/core";
import emotionNormalize from 'emotion-normalize';
import { mq } from "../styles/media";

export const HL = css`grid-area: hL;`;
export const HR = css`grid-area: hR;`;
export const HT = css`grid-area: hT;`;
export const C1 = css`grid-area: c1;`;
export const C2 = css`grid-area: c2;`;
export const C3 = css`grid-area: c3;`;
export const C4 = css`grid-area: c4;`;
export const C5 = css`grid-area: c5;`;

const Grid = styled.main`

  display: grid;

  grid-template-areas:
    "hL hT hT hT hR"
    "c1 c2 c3 c4 c5";
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 120px;
  
  
  ${mq.lt.md`
    grid-template-areas:
      "hT hT"
      "hL hR"
      "c1 c1"
      "c2 c2"
      "c3 c3"
      "c4 c4"
      "c5 c5";
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, 1fr);
  `}
    max-width: 960px;
    min-height: 100%;
    margin: 0px auto;
    padding: 0;
`;

interface ILayoutProps {
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
        <Grid>
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
            {children}
        </Grid>
    );
};
