import { css } from "styled-components";
import { lt, mq } from "./media";

export const typography = css`

    h1 {
        font-family: EditionRegular;
        font-size: 120px;
        letter-spacing: 25px;
        font-weight: 400;
        text-transform: uppercase;
        margin: 0;
        /* letter spacing causes a gap at the end of the title, so we use a margin to align it. */
        margin-right: -12.5px; 
        margin-left: 12.5px;
        
        ${mq.lt.sm`word-break: normal !important; font-size: 90px;`}
    }

    h2 {
        font-family: LetterGothicSlanted, LucidaConsole;
        font-size: 25px;
        letter-spacing: -3px;
        text-transform: uppercase;
        margin: 0;
        font-weight: 400;

        ${mq.lt.sm`font-size: 33px;`}
    }

    h3 {
        font-family: LucidaConsole;
        font-size: 12px;
	    text-transform: uppercase;	
        letter-spacing: -1;
        font-weight: 100;

        ${mq.lt.sm`font-size: 17px;`}
    }

    h4, h5, h6, body {
        font-family: LucidaConsole;
        font-size: 10px;	
        letter-spacing: -1;
        font-weight: 100;

        ${mq.lt.sm`font-size: 13px;`}
    }

`;