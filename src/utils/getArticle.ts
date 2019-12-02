import { IArticle } from "../types/models"

export const getArticle = (article: any): IArticle => {

    return ({
        date: new Date(),
        highlight: false,
        body: []
    })
}