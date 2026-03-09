import type { MouseEvent } from "react";
import { navigateTo } from "../../router/navigation";
import { AuthBar, AuthHeaderContainer, AuthHeaderContent, AuthLink, Brand, BrandLink } from "./styles";

const AuthHeader = () => {
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <AuthHeaderContainer>
      <AuthBar>
        <AuthHeaderContent>
          <BrandLink href="/" onClick={(event) => handleNavigate(event, "/")}>
            <Brand>
              <span>Seed</span>Bank
            </Brand>
          </BrandLink>
          <AuthLink href="/" onClick={(event) => handleNavigate(event, "/")}>
            Back to home page
          </AuthLink>
        </AuthHeaderContent>
      </AuthBar>
    </AuthHeaderContainer>
  );
};

export default AuthHeader;
