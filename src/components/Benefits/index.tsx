import { Section } from "../../styles/Section"
import { BenefitsCard, BenefitsContainer, BenefitsGrid, BenefitsList, BenefitsText, SubTitle, Title } from "./styles"

const Benefits = () => {
    return (
        <Section $bg="whiteCold">
        <BenefitsContainer id="the-advantage">
            <Title>Because trust grows over time and so do we.</Title>
            <BenefitsGrid>
                <BenefitsCard>
                    <SubTitle>Supervised Start</SubTitle>
                    <BenefitsText>Start building financial confidence from day one.
                        With parental supervision and guided tools, young users learn how to save, spend, and grow responsibly.</BenefitsText>
                    <BenefitsList>
                        <li>- Supervised account with parental controls</li>
                        <li>- Digital savings jar for early habits</li>
                        <li>- Gamified financial education</li>
                        <li>- Automatic yield on savings</li>
                    </BenefitsList>
                </BenefitsCard>
                <BenefitsCard className="highlight">
                    <SubTitle>Independent Growth</SubTitle>
                    <BenefitsText>As independence begins, so does responsibility.
Teens gain access to their own card, rewards, and smart tools designed to prepare them for university life.</BenefitsText>
                    <BenefitsList>
                        <li>- Personal debit card</li>
                        <li>- Educational cashback rewards</li>
                        <li>- Accumulated StudyPoints™</li>
                        <li>- Savings goals and progress tracking</li>
                    </BenefitsList>
                </BenefitsCard>
                <BenefitsCard>
                    <SubTitle>University & Beyond</SubTitle>
                    <BenefitsText>When it's time for higher education, your financial journey evolves with you.
StudyPoints™ turn into real advantages — from tuition discounts to learning resources.</BenefitsText>
                    <BenefitsList>
                        <li>- StudyPoints™ redeemable for tuition discounts</li>
                        <li>- Book and course rewards</li>
                        <li>- Special student rates</li>
                        <li>- Reduced-interest student credit</li>
                    </BenefitsList>
                </BenefitsCard>
            </BenefitsGrid>
        </BenefitsContainer>
        </Section>
    )
}

export default Benefits 