import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      orange: string;
      gray: string;
      blue: string;
      background: string;
    };
  }
}
