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
    slices: (IHtmlSlice)[];
}

export interface IHtmlSlice {
    html_rich_text: any[];
    type: "html";
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