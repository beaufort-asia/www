import React, { useState } from "react";
import styled from "@emotion/styled";
import { DashColumn, IDashProps } from "../styles/DashBox";
import { richText } from "../utils/richText";

const Container = styled(DashColumn)`
    
`;

interface ITitleProps {
    values: string
}

export const Title: React.FC<ITitleProps & IDashProps> = ({ values, ...rest }) => {

    return (
        <Container {...rest}>{richText(values)}</Container>
    );
};
