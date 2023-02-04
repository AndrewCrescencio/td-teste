import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 500px;
  /* height: 228px; */
  padding: 15px 15.78px 11px 19.42px;
  border-radius: 6px;
  background-color: #fff;
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
