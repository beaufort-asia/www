export interface IColumn {
    sections: ISection[];
}

export interface ISection {
    id: string;
    title: string;
    articles: IArticle[];
}

export interface IArticle {
    id: string;
    date: Date;
    highlight: boolean;
    slices: (IHtmlSlice | IVimeoSlice)[];
}

export interface IHtmlSlice {
    html_rich_text: any[];
    type: "html";
}

export interface IVimeoSlice {
    type: "vimeo";
    vimeo_link_text: any;
    vimeo_embed: any;
    vimeo_thumbnail_image: any;
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