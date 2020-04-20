import React from 'react';
import { ArticleBodyImagePrimary } from "../graphql/__generated__";
import { richText } from "../utils/richText";

export type ArticleBodyImageProps = {
    primary?: ArticleBodyImagePrimary | null;
}

export const ArticleBodyImage: React.FC<ArticleBodyImageProps> = ({ primary }) => {
    const url = primary?.image_file?.url;
    if (!url) return <></>;

    return (
        <>
            {richText(primary?.image_text_before)}
            <a href={url} target="_blank">
                <img src={url} />
                {richText(primary?.image_link_text)}
            </a>
            {richText(primary?.image_text_below)}
        </>
    )
}