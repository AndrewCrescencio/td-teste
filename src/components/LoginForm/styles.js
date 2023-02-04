import { media } from "@/styles/media-querie";
import styled from "styled-components";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["700"],
});

export const Form = styled.form`
  width: 100%;
  max-width: 313px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 313px;
  height: 44px;
  padding: 12px 14px 13px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 161.5%;
  color: rgba(0, 0, 0, 0.35);
`;

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPasswordButton = styled.button`
  width: 48px;
  height: 100%;
  font-size: 24px;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  display: grid;
  place-content: center;
  color: #aaa;
`;

export const SubmitButton = styled.input`
  cursor: pointer;
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-family: ${roboto.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.blue};
  &:disabled {
    color: #000;
    background-color: ${({ theme }) => theme.colors.background};
  }

  ${media.laptop`
    width: 151px;  
  `}
`;
