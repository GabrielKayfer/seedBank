import styled from "styled-components";
import { Container } from "../styles/Container";
import { Section } from "../styles/Section";
import { colors } from "../styles/colors";

export const PageSection = styled(Section).attrs({
  $py: "xxl",
})`
  min-height: calc(100vh - 240px);
  display: flex;
  align-items: center;
`;

export const PageContainer = styled(Container)`
  display: grid;
  gap: 20px;
  max-width: 760px;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(14, 201, 132, 0.12);
  color: ${colors.Emerald};
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.05;
  color: ${colors.DarkBlue};
`;

export const PageDescription = styled.p`
  max-width: 62ch;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(18, 47, 59, 0.82);
`;

export const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
