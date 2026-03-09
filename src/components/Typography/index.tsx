import styled, { css } from "styled-components";
import { bodyBy, titleBy, type Tone } from "../../styles/typography";

type HeadingVariant = "titleSm" | "titleMd" | "titleLg";
type TextVariant = "bodySm" | "bodyMd" | "bodyLg";
type TextAlign = "left" | "center" | "right";

type HeadingProps = {
  $variant?: HeadingVariant;
  $tone?: Tone;
  $align?: TextAlign;
  $fontStyle?: "normal" | "italic";
};

type TextProps = {
  $variant?: TextVariant;
  $tone?: Tone;
  $align?: TextAlign;
  $weight?: number;
};

const headingVariantMap: Record<HeadingVariant, "p" | "m" | "g"> = {
  titleSm: "p",
  titleMd: "m",
  titleLg: "g",
};

const textVariantMap: Record<TextVariant, "sm" | "md" | "lg"> = {
  bodySm: "sm",
  bodyMd: "md",
  bodyLg: "lg",
};

export const Heading = styled.h2<HeadingProps>`
  margin: 0;
  text-align: ${({ $align = "left" }) => $align};
  ${({ $variant = "titleMd", $tone = "Dark" }) => titleBy(headingVariantMap[$variant], $tone)};
  ${({ $fontStyle }) =>
    $fontStyle
      ? css`
          font-style: ${$fontStyle};
        `
      : null}
`;

export const Text = styled.p<TextProps>`
  margin: 0;
  text-align: ${({ $align = "left" }) => $align};
  ${({ $variant = "bodyMd", $tone = "Dark" }) => bodyBy(textVariantMap[$variant], $tone)};
  ${({ $weight }) =>
    $weight
      ? css`
          font-weight: ${$weight};
        `
      : null}
`;

export const Label = styled(Text).attrs({
  as: "span",
  $variant: "bodySm",
  $weight: 600,
})`
  display: inline-block;
  text-transform: none;
`;

export const Caption = styled(Text).attrs({
  as: "span",
  $variant: "bodySm",
})`
  display: inline-block;
  opacity: 0.8;
`;
