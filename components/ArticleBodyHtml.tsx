import React from 'react';
import { ArticleBodyHtmlPrimary } from '../graphql/__generated__';
import { richText } from '../utils/richText';

export type ArticleBodyHtmlProps = {
    primary?: ArticleBodyHtmlPrimary | null
}

export const ArticleBodyHtml: React.FC<ArticleBodyHtmlProps> = ({ primary }) => (
    richText(primary?.html_rich_text)
);
