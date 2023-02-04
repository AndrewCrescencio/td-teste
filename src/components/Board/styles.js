import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16px 62px;
  ${media.tablet`
    padding: 0 48px 128px;
  `}

  ${media.laptop`
    padding: 0 64px 128px 47px;
  `}
`;
export const Header = styled.header`
  padding: 16px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${media.laptop`
    padding: 40px 0 20px;
  `}
`;

export const Title = styled.h1`
  /* font-family: "Advent Pro"; */
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 186.5%;
  color: rgba(0, 0, 0, 0.44);
`;

export const CardsContainer = styled.div`
  display: grid;
  row-gap: 21px;
  column-gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  ${media.largePhone`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.laptop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
