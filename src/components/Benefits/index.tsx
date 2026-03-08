import { benefitCards } from "../../content/landing";
import { Section } from "../../styles/Section";
import BenefitCard from "./BenefitCard";
import { BenefitsContainer, BenefitsGrid, Title } from "./styles";

const Benefits = () => {
  return (
    <Section $bg="whiteCold">
      <BenefitsContainer id="the-advantage">
        <Title>Because trust grows over time and so do we.</Title>
        <BenefitsGrid>
          {benefitCards.map((card) => (
            <BenefitCard
              key={card.title}
              title={card.title}
              description={card.description}
              items={card.items}
              highlight={card.highlight}
            />
          ))}
        </BenefitsGrid>
      </BenefitsContainer>
    </Section>
  );
};

export default Benefits;
