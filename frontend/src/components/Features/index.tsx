import { featureCards, journeySteps } from "../../content/landing";
import { Container } from "../../styles/Container";
import FeatureCard from "./FeatureCard";
import {
  CardGrid,
  ImgSection,
  SectionBackground,
  StepRow,
  StepsList,
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
          <StepsList>
            {journeySteps.map((step, index) => {
              const imageLeft = index % 2 === 0;

              return (
                <StepRow key={step.image} $imageLeft={imageLeft}>
                  <ImgSection $bg={step.image} />
                  <TextSection $alignDesktop={imageLeft ? "left" : "right"}>{step.text}</TextSection>
                </StepRow>
              );
            })}
          </StepsList>
        </Container>
      </SectionBackground>
    </>
  );
};

export default Features;
