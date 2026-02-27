import { Container } from "../../styles/Container";
import { HeroContent, HeroSection, Title } from "./styles";
import hero from "../../assets/hero.png"


const Hero = () => {
    return (
        <HeroSection>
        <Container>
        <HeroContent style={{ backgroundImage: `url(${hero})` }}>
            <Title> From your first savings <br/>
                to your first <span> degree.</span>
                </Title>
        </HeroContent>
        </Container>
        </HeroSection>
    )
}

export default Hero;