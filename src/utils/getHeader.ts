import { HomeQuery } from "../pages/__generated__/HomeQuery";
import { IHeader } from "../types/models";

export const getHeader = (data: HomeQuery) => {
    const node = data.prismic.allHomes.edges![0]?.node;
    if (!node) return undefined;

    const { homepageTitle, header_left_title, header_left_rich_text, header_right_title, header_right_rich_text } = node;

    const header: IHeader = {
        title: homepageTitle,
        left: {
            title: header_left_title,
            body: header_left_rich_text
        },
        right: {
            title: header_right_title,
            body: header_right_rich_text
        }
    }

    return header;
}