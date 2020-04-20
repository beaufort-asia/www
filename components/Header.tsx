import { IHeader, IHeaderPart } from "../types/models";
import { richText } from "../utils/richText";
import React from "react";
import { PadBox, IDashProps } from "./DashBox";
import styled, { css } from "styled-components";

const Container = styled(PadBox)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export interface IHeaderProps {
    values: IHeaderPart
}

export const Header: React.FC<IHeaderProps & IDashProps> = ({ values, ...rest }) => {

    return (
        <Container {...rest}>
            {values.title && <PadBox padX={true} >{richText(values.title)}</PadBox>}
            <PadBox padX={true}>
                {values.body && richText(values.body)}
            </PadBox>
        </Container>
    );
};