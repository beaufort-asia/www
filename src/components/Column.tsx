import React from "react";
import { ISection } from "../types/models";

interface IColumnProps {
    values: ISection[];
}

export const Column: React.FC<IColumnProps> = (props) => {

    return (
        <div>Hello from Column!</div>
    );
};
