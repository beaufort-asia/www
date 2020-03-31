import { NextApiRequest, NextApiResponse } from "next";

export const Preview = async (req: NextApiRequest, res: NextApiResponse) => {
    res.clearPreviewData();
    console.log('CLEARING PREVIEW MODE');
    const expectPrismicPreview = `expectPrismicPreview=false; path=/; expires=2000-01-01`;
    const cookies = res.getHeader('Set-Cookie') as string[];
    cookies.push(expectPrismicPreview);
    res.writeHead(302, { Location: "/", "Set-Cookie": cookies });
    res.end();
};

export default Preview;
