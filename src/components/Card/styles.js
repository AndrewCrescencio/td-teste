import Image from "next/image";
import styled from "styled-components";

export const CardDate = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 4px 10px 4px 4px;
  display: flex;
  align-items: center;
  gap: 13px;
  /* font-family: 'Advent Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 186.5%;
  color: ${({ theme }) => theme.colors.white};
`;

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  /* height: 228px; */
  padding: 15px 15.78px 11px 19.42px;
  border-radius: 6px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
    transform-origin: center;
    ${CardDate} {
      transform: scale(1);
    }
  }
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 12px;
`;
