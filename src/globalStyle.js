import { createGlobalStyle } from 'styled-components';
import srcReg from 'src/assets/fonts/Gilroy-Regular.ttf';
import srcBold from 'src/assets/fonts/Gilroy-Bold.ttf';
import srcLight from 'src/assets/fonts/Gilroy-Light.ttf';
import srcMed from 'src/assets/fonts/Gilroy-Medium.ttf';
import srcExtraBold from 'src/assets/fonts/Gilroy-ExtraBold.ttf';
import srcSemiBold from 'src/assets/fonts/Gilroy-SemiBold.ttf';
import srcBlack from 'src/assets/fonts/Gilroy-Black.ttf';

const backgroundColor = '#F1F2F2';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: GilroyRegular;
      src: url(${srcReg});
      font-weight:400;
    }
    
    @font-face {
      font-family: GilroyBold;
      src: url(${srcBold});
      // font-weight: 400;
    }

    @font-face {
      font-family: GilroyLight;
      src: url(${srcLight});
      // font-weight: 700;
    }

    @font-face {
      font-family: GilroyMedium;
      src: url(${srcMed});
      // font-weight: 400;
    }
    @font-face {
      font-family: GilroySemiBold;
      src: url(${srcSemiBold});
      // font-weight: 400;
    }
    @font-face {
      font-family: GilroyExtraBold;
      src: url(${srcExtraBold});
      // font-weight: 400;
    }
    @font-face {
      font-family: GilroyBlack;
      src: url(${srcBlack});
      // font-weight: 400;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${backgroundColor};
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: GilroyRegular,Arial,Helvetica, sans-serif;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
      display: block;
    }

    *[hidden] {
      display: none;
    }

    body {
      line-height: 1;
    }

    ol, ul {
      list-style: none;
    }
    
    input {
      box-sizing: border-box;
      font-family: GilroyRegular,Arial,Helvetica,sans-serif;
      font-weight: normal;
    }

    a {
      cursor:pointer;
    }
`;

export default GlobalStyle;
