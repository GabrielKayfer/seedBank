import { Card, CardTitle } from "./styles";

type FeatureCardProps = {
  title: string;
  image: string;
};

const FeatureCard = ({ title, image }: FeatureCardProps) => {
  return (
    <Card $bg={image}>
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default FeatureCard;
