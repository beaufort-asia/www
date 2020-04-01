// import { HomeQuery, HomeQuery_prismic_allArticles_edges_node_section_PRISMIC_Section, HomeQuery_prismic_allHomes_edges_node_column1_sections, HomeQuery_prismic_allArticles_edges, HomeQuery_prismic_allHomes_edges_node_column2_sections, HomeQuery_prismic_allHomes_edges_node_column3_sections, HomeQuery_prismic_allHomes_edges_node_column4_sections, HomeQuery_prismic_allHomes_edges_node_column5_sections } from "../templates/home/HomeQuery";
import { ISection } from "../types/models";
import { Article, Section, HomeColumn1_Sections, HomeColumn2_Sections, HomeColumn3_Sections, HomeColumn4_Sections, HomeColumn5_Sections } from "../graphql/__generated__";

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
                articles: articlesBySectionId[section._meta.id]
            }
        });
}