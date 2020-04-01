
import { IHeader } from "../types/models";
import { HomeQuery, Home } from "../graphql/__generated__";

export const getHeader = (home: Home) => {

    if (!home) return undefined;

    const { homepageTitle, header_left_title, header_left_rich_text, header_right_title, header_right_rich_text } = home;

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