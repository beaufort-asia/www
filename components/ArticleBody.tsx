import React from 'react';
import { _Linkable, _ExternalLink, _FileLink, Article } from "../graphql/__generated__";
import { PadColumn } from './DashBox';
import { ArticleBodyHtml } from './ArticleBodyHtml';
import { ArticleBodyVimeo } from './ArticleBodyVimeo';
import { ArticleBodyLink } from './ArticleBodyLink';
import { ArticleBodyCustomCodeEmbed } from './ArticleBodyCustomCodeEmbed';
import { ArticleBodyImage } from './ArticleBodyImage';
import { ArticleBodyDottedLine } from './ArticleBodyDottedLine';

export const ArticleBody: React.FC<{ article: Article }> = ({ article }) => {

    return (<PadColumn padX={true} padY={true} key={article._meta.id}>
        {article.body?.map((slice, key) => {
            switch (slice.__typename) {
                case ('ArticleBodyHtml'): {
                    return <ArticleBodyHtml {...{ key, primary: slice.primary }} />
                }
                case ("ArticleBodyVimeo"): {
                    return <ArticleBodyVimeo {...{ key, primary: slice.primary }} />
                }
                case ("ArticleBodyLink"): {
                    return <ArticleBodyLink {...{ key, primary: slice.primary }} />
                }
                case ("ArticleBodyCustom_code_embed"): {
                    return <ArticleBodyCustomCodeEmbed {...{ key, primary: slice.primary }} />
                }
                case ("ArticleBodyImage"): {
                    return <ArticleBodyImage {...{ key, primary: slice.primary }} />
                }
                case ("ArticleBodyDotted_line"): {
                    return <ArticleBodyDottedLine {...{ key }} />
                }
            }
        })}
    </PadColumn>)
}