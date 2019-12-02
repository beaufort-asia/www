export interface IColumn {
    sections: ISection[];
}

export interface ISection {
    title: string;
    articles: IArticle[];
}

export interface IArticle {
    date: Date;
    highlight: boolean;
    body: [];
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