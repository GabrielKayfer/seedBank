import { css } from "styled-components";
import type { theme } from "./theme";

type CSSBlock = ReturnType<typeof css>;

const createMediaQuery = (breakpoint: keyof typeof theme.breakpoints) =>
  (styles: CSSBlock) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints[breakpoint]}) {
      ${styles}
    }
  `;

export const media = {
  sm: createMediaQuery("sm"),
  md: createMediaQuery("md"),
  lg: createMediaQuery("lg"),
};