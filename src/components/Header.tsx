import { IHeader } from "../types/models";
import { richText } from "../utils/richText";
import React from "react";



export interface IHeaderProps {
    values: IHeader
}

export const Header: React.FC<IHeaderProps> = ({ values: { left, right, title } }) => {

    return (
        <div>
            <div>
                {left.title && richText(left.title)}
                {left.body && richText(left.body)}
            </div>
            <div>{richText(title)}</div>
            <div>
                {right.title && richText(right.title)}
                {right.body && richText(right.body)}
            </div>
        </div>
    );
};