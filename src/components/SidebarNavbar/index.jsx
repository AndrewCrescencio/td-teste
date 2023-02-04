import { sidebarLinks } from "@/mocks/sidebar-links";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuLink, Navbar } from "./styles";

export const SidebarNavbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const menuLinks = sidebarLinks;

  return (
    <Navbar>
      <Menu>
        {menuLinks.map((link, i) => {
          return (
            <MenuItem key={link.url} active={currentRoute === link.url}>
              {(() => {
                return link.icon;
              })()}
              <MenuLink href={link.url}>{link.text}</MenuLink>
            </MenuItem>
          );
        })}
      </Menu>
    </Navbar>
  );
};
