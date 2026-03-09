import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Caption, Heading, Label, Text as BaseText } from "../Typography";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 60px;
  color: ${colors.whiteCold};
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  margin: 0 auto;

  max-width: 1240px;

  padding: 0 48px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 16px;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const DownloadSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Scan = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ScanText = styled(Label).attrs({
  $tone: "whiteCold",
})`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;

export const ScanImg = styled.div`
  width: 160px;
  height: 160px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.radius.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 140px;
    height: 140px;
  }
`;

export const Title = styled(Heading).attrs({
  as: "h4",
  $variant: "titleLg",
  $tone: "whiteCold",
  $align: "center",
})``;

export const ActionList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
`;

export const ActionItem = styled.span`
  display: inline-block;
  opacity: 0.78;
`;

export const ActionText = styled(Caption).attrs({
  $tone: "whiteCold",
})`
  display: inline;
  opacity: 1;
`;

export const About = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const NavSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const NavItems = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialItem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
  }
`;

export const TitleSection = styled(Heading).attrs({
  as: "h4",
  $variant: "titleSm",
  $tone: "whiteCold",
  $fontStyle: "normal",
  $align: "center",
})`
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export const Copyright = styled(BaseText).attrs({
  as: "p",
  $variant: "bodySm",
  $tone: "whiteCold",
  $align: "center",
})``;
