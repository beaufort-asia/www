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
                            section.articles.map(article => {
                                if (article.id === 'XoE7VRIAACTouko9') console.log(article);
                                return (<DashColumn padX={true} padY={true} key={article.id}>
                                    {article.slices.map(slice => {

                                        switch (slice.type) {

                                            case ("html"): {

                                                return (
                                                    richText(slice.html_rich_text)
                                                )
                                            }
                                            case ("vimeo"): {
                                                if (!slice.vimeo_embed) return;
                                                const thumbnailUrl = slice.vimeo_thumbnail_image?.url || slice.vimeo_embed?.thumbnail_url;
                                                if (!thumbnailUrl) return;
                                                return (
                                                    <>
                                                        <a href={slice.vimeo_embed.embed_url} target="_blank"><img src={thumbnailUrl} /></a>
                                                        {richText(slice.vimeo_link_text)}
                                                    </>
                                                )
                                            }
                                            case ("link"): {
                                                const thumbnailUrl = slice.link_thumbnail?.url;
                                                const content = (thumbnailUrl) ? <img src={thumbnailUrl} /> : <span>{slice.link_text}</span>
                                                return (
                                                    <>
                                                        {richText(slice.link_text_before)}
                                                        <a href={slice.link_url} target="_blank">{content}</a>
                                                        {richText(slice.link_text_after)}
                                                    </>
                                                )
                                            }
                                            case ("image"): {
                                                console.log('image slice: ', slice);
                                                const thumbnailUrl = slice.image_file?.thumbnailUrl;
                                                if (!thumbnailUrl) return;

                                                return (
                                                    <>
                                                        {richText(slice.image_text_before)}
                                                        <a href={slice.image_file?.url} target="_blank">
                                                            <img src={thumbnailUrl} />
                                                            {slice.image_link_text}
                                                        </a>
                                                        {richText(slice.image_text_after)}
                                                    </>
                                                )
                                            }
                                        }
                                    })}
                                </DashColumn>)
                            })
                        }
                    </React.Fragment>
                ))}
            </DashColumn>
        </Container >
    );
};
