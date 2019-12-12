import { IHeader, IHeaderPart } from "../types/models";
import { richText } from "../utils/richText";
import React from "react";
import styled from "@emotion/styled";
import { DashBox, DashColumn, IDashProps } from "../styles/DashBox";
import { css } from "@emotion/core";

const subtitle = css`
    font-family: LetterGothicSlanted, LucidaConsole;
    font-size: 25px;
    letter-spacing: -3px;
    text-transform: uppercase;
`;

export interface IHeaderProps {
    values: IHeaderPart
}

export const Header: React.FC<IHeaderProps & IDashProps> = ({ values, ...rest }) => {

    return (
        <DashColumn {...rest}>
            {values.title && <DashBox pad={true} dash={{ bottom: true }} >{richText(values.title)}</DashBox>}
            <DashBox pad={true}>
                {values.body && richText(values.body)}
            </DashBox>
        </DashColumn>
    );
};