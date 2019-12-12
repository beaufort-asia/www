import React from "react";
import { ISection } from "../types/models";
import styled from "@emotion/styled";
import { DashBox, DashColumn } from "../styles/DashBox";

const Container = styled(DashColumn)`
    width: 20%;
`;

interface IColumnProps {
    values: ISection[];
}

export const Column: React.FC<IColumnProps> = (props) => {

    return (
        <Container>
            <DashBox dash={{ bottom: true }} >Title</DashBox>
            <DashBox>Articles</DashBox>
        </Container>
    );
};
