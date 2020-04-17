import React from 'react';
import { ArticleBodyHtmlPrimary } from '../graphql/__generated__';
import { richText } from '../utils/richText';

export type ArticleBodyHtmlProps = {
    primary?: ArticleBodyHtmlPrimary | null
}

type Span = {
    type: string;
    spans: Span[];
}

const tweakSpan = (span: Span) => {
    switch (span.type) {
        case "hyperlink": {
            const a = span as any;
            return {
                ...a,
                data: {
                    ...a.data,
                    // if the link is to a media item, add a '__blank' target, otherwise leave it as is.
                    target: a.data.link_type === 'Media' ? '__blank' : a.data.target,
                }
            }
        }
        default: {
            return span;
        }
    }
}

const tweakSpans = (spans: Span[]): Span[] => !spans ? [] : spans.map(span => {

    return {
        ...tweakSpan(span),
        spans: tweakSpans(span.spans),
    }
})


export const ArticleBodyHtml: React.FC<ArticleBodyHtmlProps> = ({ primary }) => {
    return richText(tweakSpans(primary?.html_rich_text));
};
