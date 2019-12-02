import { ISection } from "../types/models";
import { getArticle } from "./getArticle";

export const getSection = (section: any): ISection => ({
    title: section.section_title,
    articles: section.section_articles
        .map(articles => articles.section_article)
        .map(getArticle)
})