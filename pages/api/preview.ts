import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../utils/prismic-helpers";
import { linkResolver } from "../../prismic-configuration";

export const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.query.token;
    if (!token) {
        res.status(400).send("Missing token from preview request");
        return;
    }
    if (Array.isArray(token)) {
        res.status(400).send("Token was provided as an array of values. It should be a single string.");
        return;
    }
    try {
        console.log('ENTERING PREVIEW MODE');
        const url = await Client(req).previewSession(token, linkResolver, "/");
        res.setPreviewData({
            headers: {
                'Prismic-ref': token
            }
        });
        const expectPrismicPreview = `expectPrismicPreview=entering; path=/;`;
        const cookies = res.getHeader('Set-Cookie') as string[];
        cookies.push(expectPrismicPreview);
        res.writeHead(307, { Location: url, "Set-Cookie": cookies });
        res.end();
    } catch (error) {
        res
            .status(400)
            .send(`Something went wrong with the previewSession request: ${error}`);
    }
};

export default Preview;
