import React from 'react';
import { ArticleBodyLinkPrimary } from "../graphql/__generated__";
import { richText } from "../utils/richText";
import { Link } from "./Link";

export type ArticleBodyLinkProps = { primary?: ArticleBodyLinkPrimary | null }

export const ArticleBodyLink: React.FC<ArticleBodyLinkProps> = ({ primary }) => {
    const thumbnailUrl = primary?.link_thumbnail?.url;
    const content = (thumbnailUrl) ? <img src={thumbnailUrl} /> : <span>{primary?.link_text}</span>
    return (
        <>
            {richText(primary?.link_text_before)}
            <Link linkable={primary?.link_url} target="_blank">{content}</Link>
            {richText(primary?.link_text_after)}
        </>
    )
}