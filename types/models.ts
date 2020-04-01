import { Article } from "../graphql/__generated__";

export interface IColumn {
    sections: ISection[];
}

export interface ISection {
    id: string;
    title: string;
    articles: Article[];
}

export interface IHeaderPart {
    title: string;
    body: [];
}

export interface IHeader {
    left: IHeaderPart;
    right: IHeaderPart;
    title: string;
}