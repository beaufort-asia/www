import { css } from "styled-components";
import LetterGothicStdSlantedWoff from '../public/fonts/LetterGothic/LetterGothicStdSlanted.woff';
import EditionRegularWoff from '../public/fonts/Edition/edition_-webfont.woff';
import LucidaConsoleWoff from '../public/fonts/LucidaConsole/LucidaConsole.woff';

export const fonts = css`
    @font-face {
    font-family: 'LetterGothicSlanted';
	src: url('${LetterGothicStdSlantedWoff}');    
}

@font-face {
    font-family: 'EditionRegular';
    src: url('${EditionRegularWoff}');
}

@font-face {
    font-family: 'LucidaConsole';
    src: url('${LucidaConsoleWoff}');
}
`