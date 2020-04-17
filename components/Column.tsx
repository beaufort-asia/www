import React from "react";
import { ISection } from "../types/models";
import { DashColumn, IDashProps, DashRow } from "./DashBox";
import { richText } from "../utils/richText";
import styled from "styled-components";
import { ArticleBody } from "./ArticleBody";


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
                {values.map((section, i) => (
                    <React.Fragment key={section.id}>
                        <DashRow dash={{ bottom: true, top: i > 0 }} padX={true} padY={true}>
                            {richText(section.title)}
                        </DashRow>
                        {
                            section.articles?.sort((left, right) => {
                                const leftOrderingNumber = Number.parseInt(left.ordering_number || "0");
                                const rightOrderingNumber = Number.parseInt(right.ordering_number || "0");

                                if (leftOrderingNumber < rightOrderingNumber) return -1;
                                if (leftOrderingNumber > rightOrderingNumber) return 1;

                                const leftDate = !!left.articleDate ? Date.parse(left.articleDate) : new Date(0);
                                const rightDate = !!right.articleDate ? Date.parse(right.articleDate) : new Date(0);

                                if (leftDate === rightDate) return 0;
                                if (leftDate < rightDate) return -1;
                                if (leftDate > rightDate) return 1;

                                return 0;
                            }).map(article => <ArticleBody {...{ article }} />)
                        }
                    </React.Fragment>
                ))}
            </DashColumn>
        </Container >
    );
};
