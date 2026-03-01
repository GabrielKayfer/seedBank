import { Container } from "../../styles/Container";
import { Button } from "../Button/intex";
import { Actions, HeaderContainer, HeaderContent, NavItem, NavList, RightGroup, Title } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Container> 
            <HeaderContent>
            <div>
                <Title $tone="PrimaryPurple"><span>Seed</span>Bank</Title>
            </div>
            <RightGroup>
                <NavList>
                    <NavItem href="#your-journey">
                        Your Journey
                    </NavItem>
                    <NavItem href="#the-advantage">
                        The Advantage
                    </NavItem>
                    <NavItem href="#help">
                        Help
                    </NavItem>
                </NavList>
                <Actions>
                    <Button size="sm" variant="ghost" as="a" href="/login">Login</Button>
                    <Button size="sm" variant="primary" fullWidth>Get started</Button>
                </Actions>
                </RightGroup>
            </HeaderContent>
        </Container>
    </HeaderContainer>
    )
}

export default Header