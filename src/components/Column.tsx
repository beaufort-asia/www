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
                    <React.Fragment key={section.id}>
                        <DashRow dash={{ bottom: true }} padX={true} padY={true}>
                            {richText(section.title)}
                        </DashRow>
                        {
                            section.articles.map(article => (
                                <DashColumn padX={true} padY={true} key={article.id}>
                                    {article.slices.map(slice => {

                                        switch (slice.type) {

                                            case ("html"): {

                                                return (
                                                    richText(slice.html_rich_text)
                                                )
                                            }
                                            case ("vimeo"): {
                                                const thumbnailUrl = slice.vimeo_thumbnail_image.url || slice.vimeo_embed.thumbnail_url;
                                                return (
                                                    <>
                                                        <a href={slice.vimeo_embed.embed_url} target="_blank"><img src={thumbnailUrl} /></a>
                                                        {richText(slice.vimeo_link_text)}
                                                    </>
                                                )
                                            }
                                        }
                                    })}
                                </DashColumn>
                            ))
                        }
                    </React.Fragment>
                ))}
            </DashColumn>
        </Container >
    );
};
