import { HomeQuery } from "../pages/__generated__/HomeQuery";
import { ISection, IArticle, IHtmlSlice } from "../types/models";

const fromYesNo = (str: string | undefined | null) => {
    if (!str) return false;
    return str.toLowerCase() === "yes";
}

export const getColumnSections = (data: HomeQuery, column: number): ISection[] =>
    data.prismic.allSections!.edges!.map(edge => edge!.node!)
        .filter(section => section.column === column.toString())
        .map(section => {
            return {
                title: section.section_title,
                articles: section.section_articles?.filter(sa => !!sa.section_article)
                    .map(sa => sa.section_article)
                    .map(link => (link as any)._meta.id)
                    .map(id => data.prismic.allArticles.edges?.find(article => article?.node._meta.id === id))
                    .map(article => {
                        const node = article!.node;
                        console.log(node);
                        const art: IArticle = {
                            date: new Date(node.articleDate),
                            highlight: fromYesNo(node.highlight),
                            slices: node.body?.map(slice => {

                                const { primary, type } = slice;
                                console.log(primary);
                                switch (type) {

                                    case ("html"): {
                                        const { html_rich_text } = primary as any;
                                        const htmlSlice: IHtmlSlice = {
                                            type: "html",
                                            html_rich_text
                                        }
                                        return htmlSlice;
                                    }
                                    default: throw "Unrecognised slice type: " + type;
                                }
                            }).filter(s => !!s) as any || []
                        }
                        return art;

                    }) || []
            }
        });