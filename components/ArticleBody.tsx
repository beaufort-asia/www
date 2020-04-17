import React from 'react';
import { _Linkable, _ExternalLink, _FileLink, Article } from "../graphql/__generated__";
import { DashColumn } from './DashBox';
import { ArticleBodyHtml } from './ArticleBodyHtml';
import { ArticleBodyVimeo } from './ArticleBodyVimeo';
import { ArticleBodyLink } from './ArticleBodyLink';
import { ArticleBodyCustomCodeEmbed } from './ArticleBodyCustomCodeEmbed';
import { ArticleBodyImage } from './ArticleBodyImage';

export const ArticleBody: React.FC<{ article: Article }> = ({ article }) => {

    return (<DashColumn padX={true} padY={true} key={article._meta.id}>
        {article.body?.map(slice => {

            switch (slice.__typename) {
                case ('ArticleBodyHtml'): {
                    return <ArticleBodyHtml {...{ primary: slice.primary }} />
                }
                case ("ArticleBodyVimeo"): {
                    return <ArticleBodyVimeo {...{ primary: slice.primary }} />
                }
                case ("ArticleBodyLink"): {
                    return <ArticleBodyLink {...{ primary: slice.primary }} />
                }
                case ("ArticleBodyCustom_code_embed"): {
                    return <ArticleBodyCustomCodeEmbed {...{ primary: slice.primary }} />
                }
                case ("ArticleBodyImage"): {
                    return <ArticleBodyImage {...{ primary: slice.primary }} />
                }
            }
        })}
    </DashColumn>)
}