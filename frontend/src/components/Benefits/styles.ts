import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.xl};
  

  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding: 0 40px;
    align-items: center;
  }
`;

export const Title = styled.h2<{ $tone?: Tone }>`
  ${({ $tone = "PrimaryPurple" }) => titleBy("m", $tone)};
  font-style: normal;
  margin: 0;
`;

export const BenefitsText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMd};
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  margin: 0;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: ${({ theme }) => theme.spacing.xl};

  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  min-width: 0;
  .highlight {
    transform: scale(1.02);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.lg};
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    min-width: 0;
  }
`;

export const BenefitsCard = styled.div`
  width: 100%;
  background: ${colors.white};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
  cursor: pointer;

  border: 3px solid ${colors.PrimaryPurple};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);

  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.28);
  }
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 10px 0;
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.bodySm};
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  color: ${colors.PrimaryPurple};
  font-size: ${({ theme }) => theme.typography.fontSize.titleP};
`;