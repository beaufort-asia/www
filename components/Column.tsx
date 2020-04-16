import React from "react";
import { ISection } from "../types/models";
import { DashColumn, IDashProps, DashRow } from "./DashBox";
import { richText } from "../utils/richText";
import styled from "styled-components";

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
                            section.articles.sort((left, right) => {
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
                            }).map(article => {

                                return (<DashColumn padX={true} padY={true} key={article._meta.id}>
                                    {article.body?.map(slice => {

                                        switch (slice.__typename) {

                                            case ('ArticleBodyHtml'): {

                                                return (
                                                    richText(slice.primary?.html_rich_text)
                                                )
                                            }
                                            case ("ArticleBodyVimeo"): {
                                                if (!slice.primary?.vimeo_embed) return;
                                                const thumbnailUrl = slice.primary?.vimeo_thumbnail_image?.url || slice.primary?.vimeo_embed?.thumbnail_url;
                                                if (!thumbnailUrl) return;
                                                return (
                                                    <>
                                                        <a href={slice.primary?.vimeo_embed.embed_url} target="_blank"><img src={thumbnailUrl} /></a>
                                                        {richText(slice.primary?.vimeo_link_text)}
                                                    </>
                                                )
                                            }
                                            case ("ArticleBodyLink"): {
                                                const thumbnailUrl = slice.primary?.link_thumbnail?.url;
                                                const content = (thumbnailUrl) ? <img src={thumbnailUrl} /> : <span>{slice.primary?.link_text}</span>
                                                return (
                                                    <>
                                                        {richText(slice.primary?.link_text_before)}
                                                        <a href={slice.primary?.link_url as any || ''} target="_blank">{content}</a>
                                                        {richText(slice.primary?.link_text_after)}
                                                    </>
                                                )
                                            }

                                            case ("ArticleBodyCustom_code_embed"): {
                                                return (
                                                    <div dangerouslySetInnerHTML={{ __html: slice.primary?.html?.[0].text }} />
                                                )
                                            }

                                            case ("ArticleBodyImage"): {
                                                const thumbnailUrl = slice.primary?.image_file?.thumbnailUrl;
                                                if (!thumbnailUrl) return;

                                                return (
                                                    <>
                                                        {richText(slice.primary?.image_text_before)}
                                                        <a href={slice.primary?.image_file?.url} target="_blank">
                                                            <img src={thumbnailUrl} />
                                                            {slice.primary?.image_link_text}
                                                        </a>
                                                        {richText(slice.primary?.image_text_below)}
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
