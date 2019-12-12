import React from "react";
import { ISection } from "../types/models";
import styled from "@emotion/styled";
import { DashBox, DashColumn, IDashProps } from "../styles/DashBox";

const Container = styled(DashColumn)`
    
`;

interface IColumnProps {
    values: ISection[];
}

export const Column: React.FC<IColumnProps & IDashProps> = (props) => {

    return (
        <Container {...props}>
            <DashBox dash={{ bottom: true }} >Title</DashBox>
            <DashBox>Articles</DashBox>
        </Container>
    );
};
