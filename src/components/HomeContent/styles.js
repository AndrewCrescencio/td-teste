import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const Main = styled.section`
  ${media.laptop`
    display: grid;
    grid-template-columns: 260px 1fr;
  `}
`;
