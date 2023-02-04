import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";

import {
  Box,
  Container,
  LaptopImage,
  Logo,
  Section,
  Title,
  Wrapper,
} from "./styles";
export const Login = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Logo
              src="/images/logo-tropa-digital.webp"
              alt="Tropa Digital logo"
              width={259}
              height={78}
            />
            <Title>
              Bem Vindo ao <strong>painel</strong>
            </Title>
            <LoginForm />
          </Wrapper>
          <Box>
            <LaptopImage
              src="/images/laptop.webp"
              alt="foto de uma pessoa usando um laptop"
              width={414}
              height={413}
            />
            <Image
              src="/images/wallpaper-stars.webp"
              alt="wallpaper de estrelas"
              fill
            />
          </Box>
        </Container>
      </Section>
    </>
  );
};
