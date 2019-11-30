import * as fs from "fs";
import * as convert from "xml-js";
var xml = fs.readFileSync("./content/SITE CONTENT/Content.xml", "utf8");

const findElement = (element: convert.Element, name?: string, require: boolean = true) => {
    const _name = name;
    const _element = element.elements?.find(el => el.name === _name);
    if (require && !_element) throw `Couldn't find child element with name ${_name}`;
    if (!_element) return undefined;
    if (_element.type !== 'element') throw `Child is not type 'element', actually it's ${_element.type || typeof _element}`;
    return _element;
}

const getText = (element: convert.Element) => {
    if (!element.elements) return undefined;
    const _element = element.elements[0];
    if (!(_element.type === 'text' || _element.type === "cdata")) throw `Child is not type 'text', actually it's ${_element.type || typeof _element}`;
    return _element.text as string;
}

const getScalarElement = <T>(func: (element: convert.Element) => T, element: convert.Element, name: string, require: boolean = true) => {
    const textElement = findElement(element, name, require);
    if (!textElement) return undefined;
    return func(textElement);
}

const parseBoolean = (value: string) => {
    const lower = value.toLowerCase();
    return lower === "true" || lower === "yes" || lower === "1";
}

const getDate = (el: convert.Element) => new Date(Date.parse(getText(el)));
const getInteger = (el: convert.Element) => Number.parseInt(getText(el));
const getBoolean = (el: convert.Element) => parseBoolean(getText(el));

const getTextElement = (element: convert.Element, name: string, require: boolean = true) => getScalarElement(getText, element, name, require);
const getIntegerElement = (element: convert.Element, name: string, require: boolean = true) => getScalarElement(getInteger, element, name, require);
const getBooleanElement = (element: convert.Element, name: string, require: boolean = true) => getScalarElement(getBoolean, element, name, require);

class Header {
    Title?: string;
    HtmlPart?: string;

    constructor(element: convert.Element) {
        this.Title = getTextElement(element, "Title");
        this.HtmlPart = getTextElement(element, "HtmlPart");
    }
}

class Title {
    Text: string;
    constructor(element: convert.Element) {
        this.Text = getText(element);
    }
}

class Subtitle {

    Text: string;
    constructor(element: convert.Element) {
        this.Text = getText(element);
    }
}

class Html {

    Text: string;

    constructor(element: convert.Element) {
        this.Text = getText(element);
    }
}

class VimeoPart {

    VimeoId: number;
    ThumbFileName?: string;
    LinkText?: string;

    constructor(element: convert.Element) {
        this.LinkText = getTextElement(element, "LinkText", false);
        this.ThumbFileName = getTextElement(element, "ThumbFileName", false);
        this.VimeoId = getIntegerElement(element, "VimeoId");
    }
}

class YoutubePart {

    YoutubeId: number;
    ThumbFileName?: string;

    constructor(element: convert.Element) {
        this.ThumbFileName = getTextElement(element, "ThumbFileName", false);
        this.YoutubeId = getIntegerElement(element, "YoutubeId");
    }
}

class SoundcloudPart {

    SoundId: number;
    SoundType: string;
    AutoPlay: boolean;
    ColorHex: string;
    Height: string;

    private readonly DefaultHeight = "166";
    private readonly DefaultAutoPlay = false;
    private readonly DefaultColorHex = "false";

    constructor(element: convert.Element) {
        this.SoundId = getIntegerElement(element, "SoundId");
        this.SoundType = getTextElement(element, "SoundType");
        this.AutoPlay = getBooleanElement(element, "AutoPlay", false) || this.DefaultAutoPlay;
        this.ColorHex = getTextElement(element, "ColorHex", false) || this.DefaultColorHex;
        this.Height = getTextElement(element, "Height") || this.DefaultHeight;
    }
}

class ImagePart {

    TextBefore?: string;
    LinkText?: string;
    ThumbFileName?: string;
    FullFileName?: string;
    TextAfter?: string;

    constructor(element: convert.Element) {
        this.TextBefore = getTextElement(element, "TextBefore", false);
        this.LinkText = getTextElement(element, "LinkText", false);
        this.ThumbFileName = getTextElement(element, "ThumbFileName", false);
        this.FullFileName = getTextElement(element, "FullFileName", false);
        this.TextAfter = getTextElement(element, "TextAfter", false);
    }
}

class LinkPart {

    TextBefore?: string;
    LinkText?: string;
    ThumbFileName?: string;
    LinkUrl: string;
    OpenInNewWindow: boolean;
    TextAfter?: string;

    private readonly DefaultOpenInNewWindow = true;

    constructor(element: convert.Element) {
        this.TextBefore = getTextElement(element, "TextBefore", false);
        this.LinkText = getTextElement(element, "LinkText", false);
        this.ThumbFileName = getTextElement(element, "ThumbFileName", false);
        this.LinkUrl = getTextElement(element, "LinkUrl");
        this.OpenInNewWindow = getBooleanElement(element, "OpenInNewWindow", false) || this.DefaultOpenInNewWindow;
        this.TextAfter = getTextElement(element, "TextAfter", false);

    }
}

class Article {
    Date: Date;
    Archived: boolean;
    Enabled: boolean;
    Highlight: boolean;
    Content: (Title | Subtitle | Html | VimeoPart | YoutubePart | SoundcloudPart | ImagePart | LinkPart)[]

    constructor(element: convert.Element) {
        if (!element.elements) throw `Element ${this.constructor.name} has no child elements.`;
        this.Content = [];
        for (const el of element.elements) {

            if (el.name === "Date") this.Date = getDate(el);
            if (el.name === "Archived") this.Archived = getBoolean(el);
            if (el.name === "Enabled") this.Enabled = getBoolean(el);
            if (el.name === "Highlight") this.Highlight = getBoolean(el);
            if (el.name === "Title") this.Content.push(new Title(el));
            if (el.name === "Subtitle") this.Content.push(new Subtitle(el));
            if (el.name === "Html") this.Content.push(new Html(el));
            if (el.name === "Vimeo") this.Content.push(new VimeoPart(el));
            if (el.name === "Youtube") this.Content.push(new YoutubePart(el));
            if (el.name === "Soundcloud") this.Content.push(new SoundcloudPart(el));
            if (el.name === "Image") this.Content.push(new ImagePart(el));
            if (el.name === "Link") this.Content.push(new LinkPart(el));
        }
    }
}

class Section {
    Title?: string;
    Article: Article[]

    constructor(element: convert.Element) {
        if (!element.elements) throw `Element ${this.constructor.name} has no child elements.`;
        this.Article = [];
        for (const el of element.elements) {
            if (el.name === "Title") this.Title = getText(el);
            if (el.name === "Article") this.Article.push(new Article(el));
        }
    }
}

class SiteContent {
    HeaderLeft: Header;
    HeaderRight: Header;
    Section: Section[]

    constructor(element: convert.Element) {
        if (!element.elements) throw `Element ${this.constructor.name} has no child elements.`;
        this.Section = [];

        for (const el of element.elements) {
            if (el.name === "HeaderLeft") this.HeaderLeft = new Header(el);
            if (el.name === "HeaderRight") this.HeaderRight = new Header(el);
            if (el.name === "Section") this.Section.push(new Section(el));
        }

    }
}


const content = convert.xml2js(xml, { compact: false }) as convert.Element;
const siteContent = new SiteContent(content.elements![0]);
console.log(JSON.stringify(siteContent, null, 1));

fs.writeFileSync("siteContent.json", JSON.stringify(siteContent, null, 1));