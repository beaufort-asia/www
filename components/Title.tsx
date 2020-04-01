import React from "react";
import styled from "styled-components";
import { DashColumn, IDashProps } from "./DashBox";
import { richText } from "../utils/richText";

const Container = styled(DashColumn)`
    justify-content: center;
`;

interface ITitleProps {
    values: string
}

export const Title: React.FC<ITitleProps & IDashProps> = ({ values, ...rest }) => {

    return (
        <Container {...rest}>{richText(values)}</Container>
    );
};
