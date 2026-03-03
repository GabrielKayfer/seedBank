import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  width: 100%;
  margin: 0 auto;

  padding: 0 ${({ theme }) => theme.container.padding};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;