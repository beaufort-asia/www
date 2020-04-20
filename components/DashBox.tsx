import React from "react";
import styled, { css } from "styled-components";

export interface IDashProps {
    dash?: {
        top?: boolean;
        bottom?: boolean;
        left?: boolean;
        right?: boolean;
    },
    padX?: boolean;
    padY?: boolean;
    id?: string;
}



const cover = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.25;
    z-index: -1;

`;

const dotSize = 3;
const size = 9;
const r = dotSize / 2;

const total = (size * 2) + 2 * r

const opacity = 0.25;

const borderImg = `
<svg viewBox="0 0 ${total} ${total}" width="${total}px" height="${total}px" x="0px" y="0px" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="${opacity}" cx="${r + (size * 0)}" cy="${r + (size * 0)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 1)}" cy="${r + (size * 0)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 2)}" cy="${r + (size * 0)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 0)}" cy="${r + (size * 1)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 2)}" cy="${r + (size * 1)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 0)}" cy="${r + (size * 2)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 1)}" cy="${r + (size * 2)}" r="${r}"/>
    <circle opacity="${opacity}" cx="${r + (size * 2)}" cy="${r + (size * 2)}" r="${r}"/>
</svg>    
`;

export const svgData = (svg: string) => `data:image/svg+xml;utf8,${svg}`;

const borderColor = `transparent`;
// const borderColor = `red`;

const Container = styled.div<IDashProps>`
    position: relative;
    z-index: 0;
    ${p => p.padX ? `padding-left: 6px; padding-right: 6px;` : ``}
    ${p => p.padY ? `padding-top: 6px; padding-bottom: 6px;` : ``}
    ${p => p.dash?.top ? `border-top: ${dotSize}px solid ${borderColor};` : ``};
    ${p => p.dash?.left ? `border-left: ${dotSize}px solid ${borderColor};` : ``};
    ${p => p.dash?.bottom ? `border-bottom: ${dotSize}px solid ${borderColor};` : ``};
    ${p => p.dash?.right ? `border-right: ${dotSize}px solid ${borderColor};` : ``};
    border-image-source: url('${svgData(borderImg)}');
    border-image-slice: ${dotSize};
    border-image-width: ${p => `${p.dash?.top ? `${dotSize}px` : `0`} ${p.dash?.right ? `${dotSize}px` : `0`} ${p.dash?.bottom ? `${dotSize}px` : `0`} ${p.dash?.left ? `${dotSize}px` : `0`} `};

    border-image-repeat: round;
`;

export const DashBox: React.FC<IDashProps> = ({ children, ...props }) => (
    <Container {...props}>
        {children}
    </Container>
)

DashBox.defaultProps = {

}

export const DashRow = styled(DashBox)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

export const DashColumn = styled(DashBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
`