import { createGlobalStyle } from "styled-components";

import { Advent_Pro } from "@next/font/google";

const adventPro = Advent_Pro({
  weight: ["400", "600", "700"],
  style: "normal",
});

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box !important;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: ${adventPro.style.fontFamily}, sans-serif;
  } 
`;
