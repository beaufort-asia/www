import React from "react";
import styled from "styled-components";

export interface IDashProps {
    padX?: boolean;
    padY?: boolean;
    id?: string;
}

const Container = styled.div<IDashProps>`
    position: relative;
    z-index: 0;
    ${p => p.padX ? `padding-left: 6px; padding-right: 6px;` : ``}
    ${p => p.padY ? `padding-top: 6px; padding-bottom: 6px;` : ``}
    word-break: break-word;
`;

export const PadBox: React.FC<IDashProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        {children}
    </Container>
)

PadBox.defaultProps = {

}

export const PadRow = styled(PadBox)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

export const PadColumn = styled(PadBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 100%;    
`