import styled from "styled-components";

export const SectionBackground = styled.section<{
  $variant: "fadeToWhite" | "fadeToTransparent";
}>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  background: ${({ $variant }) =>
    $variant === "fadeToWhite"
      ? "linear-gradient(to bottom, #9fc0d205 0%, #ffffff 100%)"
      : "linear-gradient(to bottom, #ffffff 100%, #9fc0d200 0%)"};
`;

export const CardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  min-width: 0;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
`;

export const Card = styled.div<{ $bg: string }>`
  width: 100%;
  height: 300px;
  position: relative;

  background-image: url(${(p) => p.$bg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const CardTitle = styled.span`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

  color: ${({ theme }) => theme.colors.PrimaryPurple};
  font-weight: 900;
  font-size: ${({ theme }) => theme.typography.fontSize.bodyMd};
  font-family: "Inter", sans-serif;
  text-align: center;
`;

export const StepsList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const StepRow = styled.div<{ $imageLeft: boolean }>`
  display: grid;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: minmax(280px, 360px) minmax(0, 1fr);

    & > :first-child {
      order: ${({ $imageLeft }) => ($imageLeft ? 0 : 1)};
      justify-self: ${({ $imageLeft }) => ($imageLeft ? "start" : "end")};
    }

    & > :last-child {
      order: ${({ $imageLeft }) => ($imageLeft ? 1 : 0)};
    }
  }
`;

export const ImgSection = styled.div<{ $bg: string }>`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1 / 1;

  background-image: url(${(p) => p.$bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const TextSection = styled.p<{ $alignDesktop: "left" | "right" }>`
  width: 100%;
  max-width: 520px;
  text-align: center;

  font-weight: normal;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.colors.Dark};
  font-size: ${({ theme }) => theme.typography.fontSize.bodyLg};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  span {
    color: ${({ theme }) => theme.colors.Emerald};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: ${({ $alignDesktop }) => $alignDesktop};
    justify-self: ${({ $alignDesktop }) => ($alignDesktop === "left" ? "start" : "end")};
  }
`;
