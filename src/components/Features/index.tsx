import { Fragment } from "react";
import { featureCards, journeySteps } from "../../content/landing";
import { Container } from "../../styles/Container";
import FeatureCard from "./FeatureCard";
import {
  CardGrid,
  ImgSection,
  SectionBackground,
  TextGrid,
  TextSection,
} from "./styles";

const Features = () => {
  return (
    <>
      <SectionBackground $variant="fadeToWhite">
        <Container>
          <CardGrid>
            {featureCards.map((card) => (
              <FeatureCard key={card.title} title={card.title} image={card.image} />
            ))}
          </CardGrid>
        </Container>
      </SectionBackground>
      <SectionBackground $variant="fadeToTransparent" id="your-journey">
        <Container>
          <TextGrid>
            {journeySteps.map((step) => (
              <Fragment key={step.image}>
                <ImgSection $bg={step.image} />
                <TextSection>{step.text}</TextSection>
              </Fragment>
            ))}
          </TextGrid>
        </Container>
      </SectionBackground>
    </>
  );
};

export default Features;
