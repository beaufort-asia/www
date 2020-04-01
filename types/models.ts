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
    slices: (IHtmlSlice | IVimeoSlice | ILinkSlice | IImageSlice)[];
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

export interface ILinkSlice {
    type: "link"
    link_text_before: any;
    link_text: any;
    link_url: any;
    link_thumbnail: any;
    link_text_after: any;
}

export interface IImageSlice {
    type: "image"
    image_text_before: any;
    image_link_text: any;
    image_file: any;
    image_text_after: any;
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