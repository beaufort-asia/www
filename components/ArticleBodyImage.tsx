import React from 'react';
import { ArticleBodyImagePrimary } from "../graphql/__generated__";
import { richText } from "../utils/richText";

export type ArticleBodyImageProps = {
    primary?: ArticleBodyImagePrimary | null;
}

export const ArticleBodyImage: React.FC<ArticleBodyImageProps> = ({ primary }) => {
    const thumbnailUrl = primary?.image_file?.thumbnailUrl;
    if (!thumbnailUrl) return <></>;

    return (
        <>
            {richText(primary?.image_text_before)}
            <a href={primary?.image_file?.url} target="_blank">
                <img src={thumbnailUrl} />
                {primary?.image_link_text}
            </a>
            {richText(primary?.image_text_below)}
        </>
    )
}