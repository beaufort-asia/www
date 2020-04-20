import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "../prismic-configuration";

export const richText = (rich_text_field: any) => {
    return rich_text_field ? <RichText linkResolver={linkResolver} render={rich_text_field} /> : <></>;
}
