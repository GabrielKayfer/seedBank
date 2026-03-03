import { Container } from "../../styles/Container";

import {
  SectionBackground,
  Card,
  CardGrid,
  CardTitle,
  ImgSection,
  TextGrid,
  TextSection,
} from "./styles";

import featureOne from "../../assets/featureOne.png";
import featureTwo from "../../assets/featureTwo.png";
import featureFive from "../../assets/featureThree.png";

import stepOne from "../../assets/stepOne.png";
import stepTwo from "../../assets/stepTwo.png";
import stepThree from "../../assets/stepThree.png";

const Features = () => {
  return (
    <>
      <SectionBackground $variant="fadeToWhite">
        <Container>
          <CardGrid>
            <Card $bg={featureOne}>
              <CardTitle>Global Account</CardTitle>
            </Card>

            <Card $bg={featureTwo}>
              <CardTitle>Market-Leading Rates</CardTitle>
            </Card>

            <Card $bg={featureFive}>
              <CardTitle>Fast and Secure</CardTitle>
            </Card>
          </CardGrid>
        </Container>
      </SectionBackground>
      <SectionBackground
        $variant="fadeToTransparent"
        id="your-journey"
      >
        <Container>
          <TextGrid>
            <ImgSection $bg={stepOne} />

            <TextSection>
              Banking That <span> Grows</span> With You <br />
              <br />
              Financial life doesn't begin at 18, it begins with the first lesson.
              Our model was built to support every stage of the journey —
              responsibility at the start, autonomy in the middle, and strategy
              for the future. <br />
              <br />
              An account designed to introduce financial education early, with
              full parental control, real-time monitoring, and a strong focus on
              habit building.
            </TextSection>

            <TextSection>
              Independence begins to take shape at 15, with guided limits that
              build confidence and smart financial habits, and when you turn 18,
              the experience evolves with you, unlocking student benefits and
              opportunities that support your next chapter.
            </TextSection>

            <ImgSection $bg={stepTwo} />
            <ImgSection $bg={stepThree} />

            <TextSection>
              After graduation, the journey continues with more structured
              investment options, long-term planning, and conscious wealth
              building, turning early financial education into a clear and
              confident strategy.
            </TextSection>
          </TextGrid>
        </Container>
      </SectionBackground>
    </>
  );
};

export default Features;