import React from 'react';
import { _Linkable, _ExternalLink, _FileLink, Article } from "../graphql/__generated__";
import { DashColumn } from './DashBox';
import { richText } from '../utils/richText';
import { Link } from './Link';
import { ArticleBodyHtml } from './ArticleBodyHtml';
import { ArticleBodyVimeo } from './ArticleBodyVimeo';

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
                    const thumbnailUrl = slice.primary?.link_thumbnail?.url;
                    const content = (thumbnailUrl) ? <img src={thumbnailUrl} /> : <span>{slice.primary?.link_text}</span>
                    return (
                        <>
                            {richText(slice.primary?.link_text_before)}
                            <Link linkable={slice.primary?.link_url} target="_blank">{content}</Link>
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
}