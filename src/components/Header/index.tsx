import { Button } from "../Button/intex";
import {
  Actions,
  HeaderBar,
  HeaderContainer,
  HeaderContent,
  NavItem,
  NavList,
  RightGroup,
  Title,
  Hamburger,
} from "./styles";

type HeaderProps = { onHelpClick: () => void };

const Header = (props: HeaderProps) => {
  
  return (
    <HeaderContainer>
      <HeaderBar>
        <HeaderContent>
          <Hamburger aria-label="Open menu" type="button">
            <span />
            <span />
            <span />
          </Hamburger>

          <Title $tone="PrimaryPurple">
            <span>Seed</span>Bank
          </Title>

          <RightGroup>
            <NavList>
              <li>
                <NavItem href="#your-journey">Your Journey</NavItem>
              </li>
              <li>
                <NavItem href="#the-advantage">The Advantage</NavItem>
              </li>
              <li>
                <Button size="sm" variant="ghost" as="button" type="button" onClick={props.onHelpClick}>Help</Button>
              </li>
            </NavList>

            <Actions>
              <Button size="sm" variant="ghost" as="a" href="/login">
                Login
              </Button>
              <Button size="sm" variant="primary">
                Get started
              </Button>
            </Actions>
          </RightGroup>
        </HeaderContent>
      </HeaderBar>
    </HeaderContainer>
  );
};

export default Header;