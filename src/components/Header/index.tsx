import { Container } from "../../styles/Container";
import { Actions, HeaderContainer, HeaderContent, NavItem, NavList, RightGroup, Title } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Container> 
            <HeaderContent>
            <div>
                <Title><span>Seed</span>Bank</Title>
            </div>
            <RightGroup>
                <NavList>
                    <NavItem>
                        Your Journey
                    </NavItem>
                    <NavItem>
                        The Advantage
                    </NavItem>
                    <NavItem>
                        Help
                    </NavItem>
                </NavList>
                <Actions>
                    <a href="#">Login</a>
                    <button>Get Started</button>
                </Actions>
                </RightGroup>
            </HeaderContent>
        </Container>
    </HeaderContainer>
    )
}

export default Header