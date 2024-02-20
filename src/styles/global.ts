'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: "TT Norms Regular", "TT Norms Bold", BasisGrotesquePro, Arial,sans-serif;
  }

  @font-face {
    font-family: "TT Norms Regular";
    font-weight: 400;
    src: url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff")format("woff");
  }

  @font-face {
    font-family: "TT Norms Bold";
    font-weight: 700;
    src: url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.woff")format("woff");
  }

  @font-face {
    font-family: "BasisGrotesquePro";
    font-weight: 400;
    src: url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.woff")format("woff");
  }
`

export default GlobalStyles
