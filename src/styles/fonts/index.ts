import { css } from "@emotion/core";
import LetterGothicEot from "./LetterGothic/LetterGothicStdSlanted.eot"
import LetterGothicSvg from "./LetterGothic/LetterGothicStdSlanted.svg"
import LetterGothicTtf from "./LetterGothic/LetterGothicStdSlanted.ttf"
import LetterGothicWoff from "./LetterGothic/LetterGothicStdSlanted.woff"
import EditionEot from "./Edition/edition_-webfont.eot"
import EditionSvg from "./Edition/edition_-webfont.svg"
import EditionTtf from "./Edition/edition_-webfont.ttf"
import EditionWoff from "./Edition/edition_-webfont.woff"
import LucidaConsoleEot from "./LucidaConsole/LucidaConsole.eot"
import LucidaConsoleSvg from "./LucidaConsole/LucidaConsole.svg"
import LucidaConsoleTtf from "./LucidaConsole/LucidaConsole.ttf"
import LucidaConsoleWoff from "./LucidaConsole/LucidaConsole.woff"
console.log(EditionEot);
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