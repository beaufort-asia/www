// import { HomeQuery, HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section, HomeQuery_prismic_allHomes_edges_node_column1_sections, HomeQuery_prismic_allArticles_edges, HomeQuery_prismic_allHomes_edges_node_column2_sections, HomeQuery_prismic_allHomes_edges_node_column3_sections, HomeQuery_prismic_allHomes_edges_node_column4_sections, HomeQuery_prismic_allHomes_edges_node_column5_sections } from "../templates/home/HomeQuery";
import { ISection, IArticle, IHtmlSlice, IVimeoSlice, ILinkSlice, IImageSlice } from "../types/models";
import { HomeQuery, ArticlesQuery, Article, Section, HomeColumn1_Sections, HomeColumn2_Sections, HomeColumn3_Sections, HomeColumn4_Sections, HomeColumn5_Sections } from "../graphql/__generated__";

const fromYesNo = (str: string | undefined | null) => {
    if (!str) return false;
    return str.toLowerCase() === "yes";
}
export type ArticlesBySectionId = { [sectionId: string]: Article[] };

export const getArticlesBySectionId = (articles: Article[]) => {
    const articlesBySectionId = articles.reduce((acc, article) => {
        if (!article) return acc;
        const sectionLink = article.section;
        if (sectionLink === null || sectionLink === undefined) {
            console.log(`'section'  not set on Article: `, article);
            return acc;
        }
        const section = sectionLink as Section;
        const sectionId = section._meta.id;
        acc[sectionId] = [...acc[sectionId] || [], article];
        return acc;
    }, {} as Record<string, any[]>) || {};
    return articlesBySectionId as ArticlesBySectionId;
}
export type ColumnSection = HomeColumn1_Sections | HomeColumn2_Sections | HomeColumn3_Sections | HomeColumn4_Sections | HomeColumn5_Sections;

export const exists = <T>(value: T | undefined | null): value is T => !!value;

export const getColumnSections = (articlesBySectionId: ArticlesBySectionId, columnSections: ColumnSection[]): ISection[] => {
    return columnSections
        .map(columnSection => columnSection.section)
        .filter(exists)
        .map((section: any) => {
            return {
                id: section._meta.id,
                title: section.section_title,
                articles: (articlesBySectionId[section._meta.id] || [] as Array<IArticle>)
                    .map(article => {
                        const art: IArticle = {
                            id: article._meta.id,
                            date: new Date(article.articleDate),
                            highlight: fromYesNo(article.highlight),
                            slices: article.body?.map(slice => {

                                const { primary, type } = slice;
                                switch (type) {

                                    case ("html"): {
                                        const { html_rich_text } = primary as any;
                                        const htmlSlice: IHtmlSlice = {
                                            type: "html",
                                            html_rich_text
                                        }
                                        return htmlSlice;
                                    }
                                    case ("vimeo"): {
                                        const { vimeo_link_text, vimeo_embed, vimeo_thumbnail_image } = primary as any;
                                        const vimeoSlice: IVimeoSlice = {
                                            type: "vimeo",
                                            vimeo_embed,
                                            vimeo_link_text,
                                            vimeo_thumbnail_image
                                        }
                                        return vimeoSlice;
                                    }

                                    case ("link"): {
                                        const { link_text_before, link_text, link_url, link_thumbnail, link_text_after } = primary as any;
                                        const linkSlice: ILinkSlice = {
                                            type: "link",
                                            link_text_before,
                                            link_text,
                                            link_url,
                                            link_thumbnail,
                                            link_text_after
                                        }
                                        return linkSlice;
                                    }

                                    case ("image"): {
                                        const { image_file,
                                            image_link_text,
                                            image_text_after,
                                            image_text_before } = primary as any;
                                        const linkSlice: IImageSlice = {
                                            type: "image",
                                            image_file,
                                            image_link_text,
                                            image_text_after,
                                            image_text_before
                                        }
                                        return linkSlice;
                                    }

                                    default: throw "Unrecognised slice type: " + type;
                                }
                            }).filter(s => !!s) as any || []
                        }
                        return art;

                    }) || []
            }
        });
}

// export const getColumnSections = (data: HomeQuery, column: number): ISection[] =>
//     data.prismic.allSections!.edges!.map(edge => edge!.node!)
//         .filter(section => section.column === column.toString())
//         .map(section => {
//             return {
//                 title: section.section_title,
//                 articles: section.section_articles?.filter(sa => !!sa.section_article)
//                     .map(sa => sa.section_article)
//                     .map(link => (link as any)._meta.id)
//                     .map(id => data.prismic.allArticles.edges?.find(article => article?.node._meta.id === id))
//                     .map(article => {
//                         const node = article!.node;
//                         console.log(node);
//                         const art: IArticle = {
//                             date: new Date(node.articleDate),
//                             highlight: fromYesNo(node.highlight),
//                             slices: node.body?.map(slice => {

//                                 const { primary, type } = slice;
//                                 console.log(primary);
//                                 switch (type) {

//                                     case ("html"): {
//                                         const { html_rich_text } = primary as any;
//                                         const htmlSlice: IHtmlSlice = {
//                                             type: "html",
//                                             html_rich_text
//                                         }
//                                         return htmlSlice;
//                                     }
//                                     default: throw "Unrecognised slice type: " + type;
//                                 }
//                             }).filter(s => !!s) as any || []
//                         }
//                         return art;

//                     }) || []
//             }
//         });