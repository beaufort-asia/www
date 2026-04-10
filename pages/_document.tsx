import Document, { Html, Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
// import { ServerStyleSheet } from 'styled-components';

type StyledDocumentProps = {
    styleTags: Array<React.ReactElement<{}>>;
}

export default class StyledDocument extends Document<StyledDocumentProps> {

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// StyledDocument.getInitialProps = async ({ renderPage }) => {
//     // Step 1: Create an instance of ServerStyleSheet
//     const sheet = new ServerStyleSheet();

//     // Step 2: Retrieve styles from components in the page
//     const page = await renderPage((App) => (props) =>
//         sheet.collectStyles(<App {...props} />),
//     );

//     // Step 3: Extract the styles as <style> tags
//     const styleTags = sheet.getStyleElement();

//     // Step 4: Pass styleTags as a prop
//     return { ...page, styleTags };
// }