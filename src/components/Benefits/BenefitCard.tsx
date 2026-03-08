import {
  BenefitsCard,
  BenefitsList,
  BenefitsText,
  SubTitle,
} from "./styles";

type BenefitCardProps = {
  title: string;
  description: string;
  items: readonly string[];
  highlight?: boolean;
};

const BenefitCard = ({ title, description, items, highlight = false }: BenefitCardProps) => {
  return (
    <BenefitsCard className={highlight ? "highlight" : undefined}>
      <SubTitle>{title}</SubTitle>
      <BenefitsText>{description}</BenefitsText>
      <BenefitsList>
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </BenefitsList>
    </BenefitsCard>
  );
};

export default BenefitCard;
