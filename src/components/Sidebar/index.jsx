import Image from "next/image";
import { useState } from "react";
import { IconChevronRight } from "../icons/IconChevron";
import { SidebarNavbar } from "../SidebarNavbar";
import { Container, SidebarButton, SidebarHeader, Wrapper } from "./styles";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarButton = () => {
    setIsOpen((prevValue) => !prevValue);
  };
  return (
    <Container open={isOpen}>
      <Wrapper>
        <SidebarHeader>
          <SidebarButton open={isOpen} onClick={() => handleSidebarButton()}>
            <IconChevronRight />
          </SidebarButton>
          <Image
            src="/images/logo-tropa-digital.webp"
            alt="Tropa Digital logo"
            width={190}
            height={57}
          />
        </SidebarHeader>
        <SidebarNavbar />
      </Wrapper>
    </Container>
  );
};
