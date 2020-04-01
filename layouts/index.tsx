import React from 'react';

import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../components/GlobalStyle';
import styled, { css } from 'styled-components';
import { mq } from '../styles/media';

export const HL = css`grid-area: hL;`;
export const HR = css`grid-area: hR;`;
export const HT = css`grid-area: hT;`;
export const HH = css`grid-area: hh;`;
export const C1 = css`grid-area: c1;`;
export const C2 = css`grid-area: c2;`;
export const C3 = css`grid-area: c3;`;
export const C4 = css`grid-area: c4;`;
export const C5 = css`grid-area: c5;`;

const Grid = styled.main`
  

  display: grid;

  grid-template-areas:
    "hL hT hT hT hR"
    "hh hh hh hh hh"
    "c1 c2 c3 c4 c5";
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 120px 3px;
  
  
  ${mq.lt.md`
    grid-template-areas:
      "hT hT"
      "hL hR"
      "hh hh"
      "c1 c1"
      "c2 c2"
      "c3 c3"
      "c4 c4"
      "c5 c5";
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 120px 120px 3px repeat(5, 1fr);
  `}
    max-width: 960px;
    min-height: 100%;
    margin: 0px auto;
    padding: 0;
`;

/**
 * Default layout component
 */
const DefaultLayout: React.FC = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <Meta />
    <Grid> {children} </Grid>
    <Footer />
  </>
);

export default DefaultLayout;
