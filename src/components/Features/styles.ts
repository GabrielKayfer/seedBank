import styled from "styled-components";

export const FeaturesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  background: linear-gradient(to bottom, #2d728f00 0%, #ffffff 100%);
`;

export const CardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
`;

export const CardTitle = styled.span`
  position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.PrimaryPurple};
    font-weight: 900;
    font-size: 22px;
    font-family: "Inter", sans-serif;
    text-align: center;
`;

export const TextSectionContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: linear-gradient(to bottom, #ffffff 100%, #2d728f00 0%);
`;

export const TextGrid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
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

export const TextSection = styled.p`
  text-align: center;
  width: 100%;
    font-weight: normal;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.colors.Dark};

  span {
    color: ${({ theme }) => theme.colors.Emerald};
  }
`;