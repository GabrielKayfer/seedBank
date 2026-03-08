import { useState } from "react";
import { headerNavItems } from "../../content/landing";
import { Button } from "../Button/intex";
import {
  Actions,
  Hamburger,
  HeaderBar,
  HeaderContainer,
  HeaderContent,
  MobileMenu,
  MobileMenuActions,
  MobileMenuItem,
  MobileMenuOverlay,
  NavItem,
  NavList,
  RightGroup,
  Title,
} from "./styles";

type HeaderProps = { onHelpClick: () => void };

const Header = ({ onHelpClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openHelp = () => {
    closeMobileMenu();
    onHelpClick();
  };

  return (
    <>
      <HeaderContainer>
        <HeaderBar>
          <HeaderContent>
            <Hamburger
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </Hamburger>

            <Title $tone="PrimaryPurple">
              <span>Seed</span>Bank
            </Title>

            <RightGroup>
              <NavList>
                {headerNavItems.map((item) => (
                  <li key={item.href}>
                    <NavItem href={item.href}>{item.label}</NavItem>
                  </li>
                ))}
                <li>
                  <Button size="sm" variant="ghost" as="button" type="button" onClick={onHelpClick}>
                    Help
                  </Button>
                </li>
              </NavList>

              <Actions>
                <Button size="sm" variant="ghost" as="a" href="#support">
                  Login
                </Button>
                <Button size="sm" variant="primary" as="button" type="button" onClick={onHelpClick}>
                  Get started
                </Button>
              </Actions>
            </RightGroup>
          </HeaderContent>
        </HeaderBar>
      </HeaderContainer>

      {isMobileMenuOpen ? (
        <MobileMenuOverlay onClick={closeMobileMenu}>
          <MobileMenu onClick={(event) => event.stopPropagation()}>
            {headerNavItems.map((item) => (
              <MobileMenuItem key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </MobileMenuItem>
            ))}
            <MobileMenuItem href="#support" onClick={closeMobileMenu}>
              Login
            </MobileMenuItem>
            <MobileMenuActions>
              <Button size="sm" variant="primary" as="button" type="button" fullWidth onClick={openHelp}>
                Help
              </Button>
              <Button size="sm" variant="primary" as="button" type="button" fullWidth onClick={openHelp}>
                Get started
              </Button>
            </MobileMenuActions>
          </MobileMenu>
        </MobileMenuOverlay>
      ) : null}
    </>
  );
};

export default Header;
