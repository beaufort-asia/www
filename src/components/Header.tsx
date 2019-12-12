import { IHeader } from "../types/models";
import { richText } from "../utils/richText";
import React from "react";
import styled from "@emotion/styled";
import { DashBox } from "../styles/DashBox";
import { css } from "@emotion/core";


const Container = styled(DashBox)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    
    img {
       width: 100%;
    }
`;

const SideTab = styled.div`
    width: 20%;
`;

const Title = styled.div`
    width: 60%;
`;

const subtitle = css`
    font-family: LetterGothicSlanted, LucidaConsole;
    font-size: 25px;
    letter-spacing: -3px;
    text-transform: uppercase;
`;

const SideTabBottom = styled.div`

`;

export interface IHeaderProps {
    values: IHeader
}

export const Header: React.FC<IHeaderProps> = ({ values: { left, right, title } }) => {

    return (
        <Container dash={{ bottom: true }}>
            <DashBox dash={{ right: true }}>
                {left.title && <DashBox pad={true} dash={{ bottom: true }} >{richText(left.title)}</DashBox>}
                <DashBox pad={true}>
                    {left.body && richText(left.body)}
                </DashBox>
            </DashBox>
            <Title>{richText(title)}</Title>
            <DashBox dash={{ left: true }}>
                {right.title && <DashBox pad={true} dash={{ bottom: true }} >{richText(right.title)}</DashBox>}
                <DashBox pad={true}>
                    {right.body && richText(right.body)}
                </DashBox>
            </DashBox>
        </Container>
    );
};