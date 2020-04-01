import { css } from "styled-components";
const base = `/fonts`;

const LetterGothicEot = `${base}/LetterGothic/LetterGothicStdSlanted.eot`;
const LetterGothicSvg = `${base}/LetterGothic/LetterGothicStdSlanted.svg`;
const LetterGothicTtf = `${base}/LetterGothic/LetterGothicStdSlanted.ttf`;
const LetterGothicWoff = `${base}/LetterGothic/LetterGothicStdSlanted.woff`;
const EditionEot = `${base}/Edition/edition_-webfont.eot`;
const EditionSvg = `${base}/Edition/edition_-webfont.svg`;
const EditionTtf = `${base}/Edition/edition_-webfont.ttf`;
const EditionWoff = `${base}/Edition/edition_-webfont.woff`;
const LucidaConsoleEot = `${base}/LucidaConsole/LucidaConsole.eot`;
const LucidaConsoleSvg = `${base}/LucidaConsole/LucidaConsole.svg`;
const LucidaConsoleTtf = `${base}/LucidaConsole/LucidaConsole.ttf`;
const LucidaConsoleWoff = `${base}/LucidaConsole/LucidaConsole.woff`;

export const fonts = css`
    @font-face {
    font-family: 'LetterGothicSlanted';
	src: url('${LetterGothicEot}');
    src: url('${LetterGothicEot}#iefix') format('embedded-opentype'),
         url('${LetterGothicWoff}') format('woff'),
         url('${LetterGothicTtf}') format('truetype'),
         url('${LetterGothicSvg}#LetterGothicSlanted') format('svg');     
}

@font-face {
    font-family: 'EditionRegular';
    src: url('${EditionEot}');
    src: url('${EditionEot}#iefix') format('embedded-opentype'),
         url('${EditionWoff}') format('woff'),
         url('${EditionTtf}') format('truetype'),
         url('${EditionSvg}#EditionRegular') format('svg');    
}

@font-face {
    font-family: 'LucidaConsole';
    src: url('${LucidaConsoleEot}');
    src: url('${LucidaConsoleEot}#iefix') format('embedded-opentype'),
         url('${LucidaConsoleWoff}') format('woff'),
         url('${LucidaConsoleTtf}') format('truetype'),
         url('${LucidaConsoleSvg}#LucidaConsole') format('svg');
}
`