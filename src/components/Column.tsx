import React from "react";

interface IColumnProps {
    sectionIds: string[];
}

export const Column: React.FC<IColumnProps> = (props) => {

    return (
        <div>Hello from Column!</div>
    );
};
