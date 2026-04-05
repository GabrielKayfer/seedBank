import { useEffect, useState, type FormEvent } from "react";
import styled from "styled-components";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
import { Button } from "../components/Button/intex";
import {
  Disclaimer,
  Field,
  FieldLabel,
  Form,
  FormFooter,
  HeaderText,
  Input,
  LoginCard,
  ModalHeader,
  SecondaryAction,
} from "../components/LoginPanel/styles";
import { useAuth } from "../context/AuthContext";
import { navigateTo } from "../router/navigation";

const LoginPageShell = styled.div`
  width: 100%;
  max-width: 460px;
  display: grid;
  gap: 18px;
`;

const ErrorMessage = styled.p`
  margin: 0;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(242, 114, 68, 0.14);
  color: ${({ theme }) => theme.colors.Orange};
  font-size: 0.95rem;
  line-height: 1.45;
`;

const LoadingNote = styled.div`
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(45, 114, 143, 0.12);
  color: ${({ theme }) => theme.colors.DarkBlue};
  box-shadow: 0 14px 32px rgba(18, 47, 59, 0.06);

  strong {
    display: block;
    margin-bottom: 6px;
    font-size: 0.98rem;
  }

  p {
    margin: 0;
    color: rgba(18, 47, 59, 0.68);
    line-height: 1.5;
  }
`;

const LoginPage = () => {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const { authError, clearAuthError, isAuthenticated, isLoadingAuth, login, token, profile } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/app");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await login({ login: loginValue, password });
    } catch {
      // authError is already managed by AuthContext.
    }
  };

  const isRestoringSession = isLoadingAuth && Boolean(token) && !profile;
  const isSubmittingLogin = isLoadingAuth && !isRestoringSession;

  if (isRestoringSession) {
    return (
      <AuthLoadingScreen
        compact
        title="Restoring your account"
        description="Checking your saved token and loading the latest account details."
      />
    );
  }

  return (
    <LoginPageShell>
      {isSubmittingLogin ? (
        <LoadingNote>
          <strong>Signing you in</strong>
          <p>We are validating your credentials and loading your customer account.</p>
        </LoadingNote>
      ) : null}

      <LoginCard>
        <ModalHeader>
          <HeaderText>
            <span>ACCESS YOUR ACCOUNT</span>
            <h2>SeedBank Login</h2>
            <p>Sign in to continue to your account.</p>
          </HeaderText>
        </ModalHeader>

        <Form onSubmit={(event) => void handleSubmit(event)}>
          <Field>
            <FieldLabel htmlFor="login">Login</FieldLabel>
            <Input
              autoComplete="username"
              id="login"
              name="login"
              onChange={(event) => {
                clearAuthError();
                setLoginValue(event.target.value);
              }}
              placeholder="client@seedbank.com"
              type="text"
              value={loginValue}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              autoComplete="current-password"
              id="password"
              name="password"
              onChange={(event) => {
                clearAuthError();
                setPassword(event.target.value);
              }}
              placeholder="Seed1234"
              type="password"
              value={password}
            />
          </Field>

          {authError ? <ErrorMessage>{authError}</ErrorMessage> : null}

          <FormFooter>
            <Button fullWidth size="md" type="submit" disabled={isLoadingAuth}>
              {isSubmittingLogin ? "Signing in..." : "Sign in"}
            </Button>
            <SecondaryAction type="button">Sign up</SecondaryAction>
            <Disclaimer>Create your account in just a few steps.</Disclaimer>
          </FormFooter>
        </Form>
      </LoginCard>
    </LoginPageShell>
  );
};

export default LoginPage;
