import React, { useState } from 'react';

import Meta from "../components/Meta";
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../components/GlobalStyle';
import styled, { css } from 'styled-components';
import { mq, lt } from '../styles/media';
import ReactResizeDetector from 'react-resize-detector';
import { useMediaQuery } from 'react-responsive';

export const HL = css`grid-area: hL;`;
export const HR = css`grid-area: hR;`;
export const HT = css`grid-area: hT;`;
export const C1 = css`grid-area: c1;`;
export const C2 = css`grid-area: c2;`;
export const C3 = css`grid-area: c3;`;
export const C4 = css`grid-area: c4;`;
export const C5 = css`grid-area: c5;`;
export const FF = css`grid-area: ff;`;

const maxWidth = 960;
const headerHeight = 113;
const columns = 5;

const dotSize = 3;
const columnWidth = (maxWidth - dotSize * columns) / columns;

const dotsPerColumn = 12;
const columnDotLength = columnWidth / dotsPerColumn;
const columnDotSpace = columnDotLength - dotSize;

const r = dotSize / 2;

const opacity = 0.25;

const hDot = `
<svg viewBox="0 0 ${columnDotSpace} ${dotSize}" width="${columnDotSpace}px" height="${dotSize}px" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="${opacity}" cx="${columnDotSpace / 2}" cy="${dotSize / 2}" r="${r}"/>
</svg>    
`;

const vDot = `
<svg viewBox="0 0 ${dotSize} ${columnDotSpace}" width="${dotSize}px" height="${columnDotSpace}px" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="${opacity}" cx="${dotSize / 2}" cy="${columnDotSpace / 2}" r="${r}"/>
</svg>    
`;

export const svgData = (svg: string) => `data:image/svg+xml;utf8,${svg}`;

export const HDots = styled.div`
    background-image: url('${svgData(hDot)}');    
    background-repeat: repeat;
    width: 100%;
    height: ${dotSize}px;
`;

export const VDots = styled.div`
    background-image: url('${svgData(vDot)}');    
    background-repeat: repeat;    
    width: ${dotSize}px; 
`;

const Grid = styled.main`
  
  display: grid;

  grid-template-areas:
    "hL   v1   hT    hT    hT    hT    hT    v4   hR"
    "h1   v1   h2    h2    h2    h2    h2    v4   h3"
    "c1   v1   c2    v2    c3    v3    c4    v4   c5"
    "ff   ff   ff    ff    ff    ff    ff    ff   ff";

  grid-template-columns: 1fr 3px 1fr 3px 1fr 3px 1fr 3px 1fr;  
  grid-template-rows: ${headerHeight}px 3px;
  
  ${mq.lt.md`    
    grid-template-areas:
      "hT   hT   hT"
      "h1   h1   h1"
      "hL   v1   hR"
      "h2   h2   h2"
      "c1   c1   c1"
      "c2   c2   c2"
      "c3   c3   c3"
      "c4   c4   c4"
      "c5   c5   c5"
      "ff   ff   ff";
      grid-template-columns: 1fr 3px 1fr;
      grid-template-rows: ${headerHeight}px 3px ${headerHeight}px 3px;
  `}
  max-width: 960px;
  min-height: 100%;
  margin: 0px auto;
  padding: 0;
`;

const HideInMobileVDots = styled(VDots)`

  ${mq.lt.md`
    display: none;
  `}
`;

/**
 * Default layout component
 */
const DefaultLayout: React.FC = ({ children }) => {

  const [c1Height, setC1Height] = useState(0);
  const [c2Height, setC2Height] = useState(0);
  const [c3Height, setC3Height] = useState(0);
  const [c4Height, setC4Height] = useState(0);
  const [c5Height, setC5Height] = useState(0);

  const isMobile = useMediaQuery({
    query: lt.md
  });

  console.log('isMobile:', isMobile);

  const v1Height = headerHeight + dotSize + (c1Height > c2Height ? c1Height : c2Height);
  const v2Height = c2Height > c3Height ? c2Height : c3Height;
  const v3Height = c3Height > c4Height ? c3Height : c4Height;
  const v4Height = headerHeight + dotSize + (c4Height > c5Height ? c4Height : c5Height);

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Meta />
      <Grid>

        <ReactResizeDetector handleWidth={false} handleHeight={!isMobile} querySelector={"#column-1-content"} onResize={(_, height) => setC1Height(height)} />
        <ReactResizeDetector handleWidth={false} handleHeight={!isMobile} querySelector={"#column-2-content"} onResize={(_, height) => setC2Height(height)} />
        <ReactResizeDetector handleWidth={false} handleHeight={!isMobile} querySelector={"#column-3-content"} onResize={(_, height) => setC3Height(height)} />
        <ReactResizeDetector handleWidth={false} handleHeight={!isMobile} querySelector={"#column-4-content"} onResize={(_, height) => setC4Height(height)} />
        <ReactResizeDetector handleWidth={false} handleHeight={!isMobile} querySelector={"#column-5-content"} onResize={(_, height) => setC5Height(height)} />

        <HDots style={{ gridArea: 'h1' }} />
        <HDots style={{ gridArea: 'h2' }} />
        <HDots style={{ gridArea: 'h3' }} />

        <VDots style={{ gridArea: 'v1', ...(isMobile ? {} : { height: `${v1Height}px` }) }} />
        <HideInMobileVDots style={{ gridArea: 'v2', height: `${v2Height}px` }} />
        <HideInMobileVDots style={{ gridArea: 'v3', height: `${v3Height}px` }} />
        <HideInMobileVDots style={{ gridArea: 'v4', height: `${v4Height}px` }} />

        {children}

      </Grid>
    </>
  )
};

export default DefaultLayout;
