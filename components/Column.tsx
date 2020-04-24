import React from "react";
import { ISection } from "../types/models";
import { PadColumn } from "./DashBox";
import { richText } from "../utils/richText";
import styled from "styled-components";
import { ArticleBody } from "./ArticleBody";
import { HDots } from "../layouts";


const Container = styled(PadColumn)`
    
`;

interface IColumnProps {
    values: ISection[];
    contentId: string;
}

export const Column: React.FC<IColumnProps> = ({ contentId, values, ...rest }) => {

    return (
        <Container {...rest}>
            <PadColumn id={contentId}>
                {values.map((section, i) => (
                    <React.Fragment key={section.id}>
                        {i > 0 && <HDots />}
                        <PadColumn padY={true}>
                            {richText(section.title)}
                        </PadColumn>
                        <HDots />
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
                            }).map((article, key) => <ArticleBody {...{ key, article }} />)
                        }
                    </React.Fragment>
                ))}
            </PadColumn>
        </Container >
    );
};
