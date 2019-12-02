import { HomeQuery } from "../pages/__generated__/HomeQuery";
import { getSection } from "./getSection";

export const getColumnSections = (data: HomeQuery, column: number) =>
    data.prismic.allSections!.edges!.map(edge => edge!.node!)
        .filter(section => section.column === column.toString())
        .map(getSection);