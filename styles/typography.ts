import { css } from "styled-components";

export const typography = css`

    h1 {
        font-family: EditionRegular;
        font-size: 120px;
        letter-spacing: 25px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0;
    }

    h2 {
        font-family: LetterGothicSlanted, LucidaConsole;
        font-size: 25px;
        letter-spacing: -3px;
        text-transform: uppercase;
        margin: 0;
        font-weight: 400;
    }

    h3 {
        font-family: LucidaConsole;
        font-size: 12px;
	    text-transform: uppercase;	
        letter-spacing: -1;
        font-weight: 400;
    }

    h4, h5, h6, body {
        font-family: LucidaConsole;
        font-size: 10px;	
        letter-spacing: -1;
        font-weight: 400;
    }

`;