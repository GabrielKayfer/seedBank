import styled from "styled-components";
import { colors } from "../../styles/colors";
import { titleBy, type Tone } from "../../styles/typography";

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

  span {
    font-size: 30px;
    font-weight: 600;
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};

    span {
      font-size: 24px;
    }
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

export const Title = styled.h4<{ $tone?: Tone }>`
  ${({ $tone = "whiteCold" }) => titleBy("g", $tone)};
  margin: 0;
`;

export const ActionList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ActionItem = styled.a`
  display: inline-block;
  margin-bottom: 8px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.bodySm};
  font-weight: normal;
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  color: ${colors.whiteCold};

  &:hover {
    color: ${colors.Emerald};
  }
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

export const SocialItem = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    cursor: pointer;
  }

  &:hover img {
    opacity: 0.8;
  }
`;

export const TitleSection = styled.h4`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.titleP};
  font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
  color: ${colors.whiteCold};
  margin: 0;
`;
