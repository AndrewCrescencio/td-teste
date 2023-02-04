import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/media-querie";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.orange};
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  padding: 16px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;

  ${media.laptop`
    width: 857px;
    height: 512px;
    display: flex;
    justify-content: space-between;
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 70px 16px;

  ${media.largePhone`
    padding: 70px 32px
  `}
  ${media.tablet`
    padding: 70px 57px;
  `}
  ${media.laptop`  
    padding: 70px 0 0 57px;
  `}
`;

export const Logo = styled(Image)`
  width: 100%;
  max-width: 259px;
  margin-bottom: 44px;

  ${media.laptop`
    margin-left: 27px;
  `}
`;

export const Box = styled.div`
  display: none;

  ${media.laptop`
  background-color: #000;
  width: 389px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  `}
`;

export const LaptopImage = styled(Image)`
  position: relative;
  z-index: 2;
  left: -67px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  /* font-family: "Advent Pro"; */
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 186.5%;
  color: rgba(0, 0, 0, 0.44);

  strong {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
