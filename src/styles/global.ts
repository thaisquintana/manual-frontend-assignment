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

// @font-face {
//   font-family: "TT Norms Regular";
//   src: url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.eot");
//   src: url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.eot?#iefix")format("embedded-opentype"),
//   url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff2")format("woff2"),
//   url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff")format("woff"),
//   url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.ttf")format("truetype"),
//   url("https://db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.svg#TT Norms Regular")format("svg");
// }

// @font-face {
//   font-family: "TT Norms Bold";
//   src: url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.eot");
//   src: url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.eot?#iefix")format("embedded-opentype"),
//   url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.woff2")format("woff2"),
//   url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.woff")format("woff"),
//   url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.ttf")format("truetype"),
//   url("https://db.onlinewebfonts.com/t/1dbb799579d171332c92c242730a0eb6.svg#TT Norms Bold")format("svg");
// }

// @font-face {
//   font-family: "BasisGrotesquePro";
//   src: url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.eot");
//   src: url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.eot?#iefix")format("embedded-opentype"),
//   url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.woff2")format("woff2"),
//   url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.woff")format("woff"),
//   url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.ttf")format("truetype"),
//   url("https://db.onlinewebfonts.com/t/63ca4f3afb3f9ae48d70fe0b02acebdc.svg#BasisGrotesquePro")format("svg");
// }
