import { Container } from "../../styles/Container";

import branding from "../../assets/branding.png";
import { TextContainer, Title, TrustContainer, Text, BrandingImg } from "./styles";
import { Button } from "../Button/intex";
import { Section } from "../../styles/Section";

type TrustSectionProps = {
  onContactClick: () => void;
};

const TrustSection = ({ onContactClick }: TrustSectionProps) => {
  return (
    <Section>
      <Container>
        <TrustContainer>
          <TextContainer>
            <Title>Clear. Honest. Always.</Title>
            <Text>
              We believe financial education starts with transparency. <br />
              No hidden fees. No confusing contracts. <br />
              Just clear terms, market-aligned rates, and full visibility from day one.
            </Text>
            <Button size="md" variant="primary" as="button" type="button" onClick={onContactClick}>
              Get in touch
            </Button>
          </TextContainer>
          <BrandingImg style={{ backgroundImage: `url(${branding})` }}></BrandingImg>
        </TrustContainer>
      </Container>
    </Section>
  );
};

export default TrustSection;
