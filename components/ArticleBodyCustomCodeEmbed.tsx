import React from 'react';

import { ArticleBodyCustom_Code_EmbedPrimary } from "../graphql/__generated__"

export type ArticleBodyCustomCodeEmbedProps = {
    primary?: ArticleBodyCustom_Code_EmbedPrimary | null;
}

export const ArticleBodyCustomCodeEmbed: React.FC<ArticleBodyCustomCodeEmbedProps> = ({ primary }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: primary?.html?.[0].text }} />
    )
}