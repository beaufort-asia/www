import React from "react";
import { _Linkable, _ExternalLink, _FileLink } from "../graphql/__generated__";

export type LinkProps = {
    linkable?: _Linkable | null;
    target?: string;
};

export const Link: React.FC<LinkProps> = ({ target, linkable, children }) => {
    if (linkable === undefined || linkable === null)
        return <>{children}</>;

    switch (linkable._linkType) {
        case "Link.web": {
            const { url } = linkable as _ExternalLink;
            return <a href={url} {...{ target }}>{children}</a>;
        }
        case "Link.file": {
            const { url } = linkable as _FileLink;
            return <a href={url} {...{ target }}>{children}</a>;
        }
    }

    return <>{children}</>;
};
