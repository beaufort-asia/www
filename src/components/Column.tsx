import React from "react";
import { ISection } from "../types/models";
import styled from "@emotion/styled";
import { DashBox, DashColumn, IDashProps, DashRow } from "../styles/DashBox";
import { richText } from "../utils/richText";
import { css } from "@emotion/core";

const Container = styled(DashColumn)`
    
`;

interface IColumnProps {
    values: ISection[];
    isMobile: boolean;
    contentId: string;
}

export const Column: React.FC<IColumnProps & IDashProps> = ({ contentId, values, dash, ...rest }) => {

    return (
        <Container {...rest}>
            <DashColumn {...{ dash }} id={contentId}>
                {values.map(section => (
                    <>
                        <DashRow dash={{ bottom: true }} padX={true} padY={true}>
                            {richText(section.title)}
                        </DashRow>
                        {section.articles.map(article => (
                            <DashColumn padX={true} padY={true}>
                                {article.slices.map(slice => {

                                    switch (slice.type) {

                                        case ("html"): {

                                            return (
                                                richText(slice.html_rich_text)
                                            )
                                        }
                                    }
                                })}
                            </DashColumn>
                        ))}
                    </>
                ))}
            </DashColumn>
        </Container>
    );
};
