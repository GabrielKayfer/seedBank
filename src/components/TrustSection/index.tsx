import { Container } from "../../styles/Container";

import branding from "../../assets/branding.png";
import { TextContainer, Title, TrustContainer, Text, BrandingImg } from "./styles";

const TrustSection = () => {
    return (
            <Container>
        <TrustContainer>
            <TextContainer>
            <Title>Clear. Honest. Always.</Title>
            <Text>We believe financial education starts with transparency. <br/>
                    No hidden fees. No confusing contracts. <br/>
                    Just clear terms, market-aligned rates, and full visibility from day one.</Text>
            <button>Get in Touch</button>
            </TextContainer>
            <BrandingImg style={{ backgroundImage: `url(${branding})` }}></BrandingImg>
        </TrustContainer>
            </Container>
    )
}

export default TrustSection;