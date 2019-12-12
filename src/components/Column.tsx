import React from "react";
import { ISection } from "../types/models";
import styled from "@emotion/styled";
import { DashBox, DashColumn, IDashProps, DashRow } from "../styles/DashBox";
import { richText } from "../utils/richText";

const Container = styled(DashColumn)`
    
`;

interface IColumnProps {
    values: ISection[];
}

export const Column: React.FC<IColumnProps & IDashProps> = ({ values, ...rest }) => {

    console.log(values);
    return (
        <Container {...rest}>
            {values.map(section => (
                <>
                    <DashRow dash={{ bottom: true }}>
                        {richText(section.title)}
                    </DashRow>
                    {section.articles.map(article => (
                        <>
                            {article.slices.map(slice => {
                                console.log("IN RENDER: ", slice);
                                switch (slice.type) {

                                    case ("html"): {

                                        return (
                                            richText(slice.html_rich_text)
                                        )
                                    }
                                }
                            })}
                        </>
                    ))}
                </>
            ))}
        </Container>
    );
};
