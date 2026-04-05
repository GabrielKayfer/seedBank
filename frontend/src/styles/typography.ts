import { css } from "styled-components";
import { colors } from "./colors";

export type Tone = keyof typeof colors; // <- tipado automaticamente
type TitleSize = "p" | "m" | "g";
type BodySize = "sm" | "md" | "lg";

export const title = {
  p: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSize.titleP};
    font-weight: ${({ theme }) => theme.typography.fontWeight.black};
    font-style: normal;
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  `,
  m: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-size: ${({ theme }) => theme.typography.fontSize.titleM};
    font-weight: ${({ theme }) => theme.typography.fontWeight.black};
    font-style: italic;
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  `,
  g: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSize.titleG};
    font-weight: ${({ theme }) => theme.typography.fontWeight.black};
    font-style: italic;
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  `,
} as const;

export const body = {
  sm: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSize.bodySm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  `,
  md: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.inter};
    font-size: ${({ theme }) => theme.typography.fontSize.bodyMd};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  `,
  lg: css`
    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-size: ${({ theme }) => theme.typography.fontSize.bodyLg};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  `,
} as const;

export const tone = (t: Tone) => css`
  color: ${colors[t]};
`;

export const titleBy = (size: TitleSize, t: Tone) => css`
  ${title[size]};
  ${tone(t)};
`;

export const bodyBy = (size: BodySize, t: Tone) => css`
  ${body[size]};
  ${tone(t)};
`;