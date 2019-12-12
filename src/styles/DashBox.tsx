import React from "react";
import { css } from "@emotion/core";

import * as hor from "../images/rule-dotted-horizontal-black.png";
import * as ver from "../images/rule-dotted-vertical-black.png";
import styled from "@emotion/styled";

export interface IDashProps {
    dash?: {
        top?: boolean;
        bottom?: boolean;
        left?: boolean;
        right?: boolean;
    },
    pad?: boolean;
}

const Container = styled.div<{ pad?: boolean }>`
    position: relative;
    ${({ pad }) => pad ? css`
        padding: 6px;
    `: css``}
`;

const cover = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Top = styled.div`
    ${cover}
    background-image: url(${hor});
    background-position: top;
    background-repeat: repeat-x;
`;
const Bottom = styled.div`
    ${cover}
    background-image: url(${hor});
    background-position: bottom;
    background-repeat: repeat-x;
`;
const Left = styled.div`
    ${cover}
    background-image: url(${ver});
    background-position: left;
    background-repeat: repeat-y;
`;
const Right = styled.div`
    ${cover}
    background-image: url(${ver});
    background-position: right;
    background-repeat: repeat-y;
`;

export const DashBox: React.FC<IDashProps> = ({ dash, children, ...props }) => (
    <Container {...props}>
        {dash?.top && <Top></Top>}
        {dash?.bottom && <Bottom></Bottom>}
        {dash?.left && <Left></Left>}
        {dash?.right && <Right></Right>}
        {children}
    </Container>
)

DashBox.defaultProps = {

}

export const DashRow = styled(DashBox)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: stretch;
`;

export const DashColumn = styled(DashBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`