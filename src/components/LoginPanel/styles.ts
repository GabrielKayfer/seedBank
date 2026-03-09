import styled from "styled-components";
import { colors } from "../../styles/colors";

export const LoginCard = styled.div`
  width: min(100%, 460px);
  padding: 24px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(14, 201, 132, 0.08) 0%, rgba(45, 114, 143, 0.04) 100%),
    ${colors.white};
  box-shadow: 0 28px 80px rgba(10, 20, 24, 0.2);
  border: 1px solid rgba(45, 114, 143, 0.14);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 32px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`;

export const HeaderText = styled.div`
  span {
    display: inline-block;
    margin-bottom: 8px;
    color: ${colors.Emerald};
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    color: ${colors.DarkBlue};
    font-size: clamp(1.7rem, 5vw, 2.2rem);
    line-height: 1.05;
  }

  p {
    margin: 10px 0 0;
    color: rgba(18, 47, 59, 0.76);
    font-size: 0.98rem;
    line-height: 1.45;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 18px;
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;
`;

export const FieldLabel = styled.label`
  color: ${colors.DarkBlue};
  font-size: 0.95rem;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 54px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid rgba(45, 114, 143, 0.18);
  background: rgba(255, 255, 255, 0.82);
  color: ${colors.DarkBlue};
  font-size: 1rem;

  &::placeholder {
    color: rgba(18, 47, 59, 0.42);
  }

  &:focus {
    outline: none;
    border-color: ${colors.PrimaryPurple};
    box-shadow: 0 0 0 4px rgba(45, 114, 143, 0.12);
  }
`;

export const FormFooter = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 6px;
`;

export const SecondaryAction = styled.button`
  border: 0;
  padding: 4px 0;
  background: transparent;
  color: ${colors.PrimaryPurple};
  font-size: 0.98rem;
  font-weight: 700;
  justify-self: start;
  cursor: pointer;

  &:hover {
    color: ${colors.Emerald};
  }
`;

export const Disclaimer = styled.p`
  margin: 0;
  color: rgba(18, 47, 59, 0.72);
  font-size: 0.9rem;
  line-height: 1.45;
`;
