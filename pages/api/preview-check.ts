import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../prismic-helpers";
import Prismic from "prismic-javascript";

export const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.cookies);
    res.end();
};

export default Preview;
