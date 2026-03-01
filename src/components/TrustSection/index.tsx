import { Container } from "../../styles/Container";

import branding from "../../assets/branding.png";
import { TextContainer, Title, TrustContainer, Text, BrandingImg } from "./styles";
import { Button } from "../Button/intex";

const TrustSection = () => {
    return (
            <Container>
        <TrustContainer>
            <TextContainer>
            <Title>Clear. Honest. Always.</Title>
            <Text>We believe financial education starts with transparency. <br/>
                    No hidden fees. No confusing contracts. <br/>
                    Just clear terms, market-aligned rates, and full visibility from day one.</Text>
            <Button size="md" variant="primary" as="a" href="/login">Get in touch</Button>
            </TextContainer>
            <BrandingImg style={{ backgroundImage: `url(${branding})` }}></BrandingImg>
        </TrustContainer>
            </Container>
    )
}

export default TrustSection;