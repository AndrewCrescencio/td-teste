import { css } from "styled-components";

export const sizes = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  largePhone: 520,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // const emSize = sizes[label] / 16;
  const size = sizes[label];
  accumulator[label] = (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
