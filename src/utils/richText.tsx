import React from "react";
import { RichText } from "prismic-reactjs";
import { linkResolver } from "./linkResolver";

export const richText = (rich_text_field: any) => <RichText linkResolver={linkResolver} render={rich_text_field} />
