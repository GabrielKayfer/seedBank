import { useState, type MouseEvent } from "react";
import { headerNavItems } from "../../content/landing";
import { navigateTo } from "../../router/navigation";
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
  TitleLink,
} from "./styles";

type LandingHeaderProps = {
  onHelpClick: () => void;
};

const LandingHeader = ({ onHelpClick }: LandingHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openHelp = () => {
    closeMobileMenu();
    onHelpClick();
  };

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    closeMobileMenu();
    navigateTo(href);
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

            <TitleLink href="/" onClick={(event) => handleNavigate(event, "/")}>
              <Title $tone="PrimaryPurple">
                <span>Seed</span>Bank
              </Title>
            </TitleLink>

            <RightGroup>
              <NavList>
                {headerNavItems.map((item) => (
                  <li key={item.href}>
                    <NavItem href={item.href} onClick={(event) => handleNavigate(event, item.href)}>
                      {item.label}
                    </NavItem>
                  </li>
                ))}
                <li>
                  <Button size="sm" variant="ghost" as="button" type="button" onClick={onHelpClick}>
                    Help
                  </Button>
                </li>
              </NavList>

              <Actions>
                <Button as="a" href="/login" size="sm" variant="ghost" onClick={(event) => handleNavigate(event, "/login")}>
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
              <MobileMenuItem key={item.href} href={item.href} onClick={(event) => handleNavigate(event, item.href)}>
                {item.label}
              </MobileMenuItem>
            ))}
            <MobileMenuItem href="/login" onClick={(event) => handleNavigate(event, "/login")}>
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

export default LandingHeader;

