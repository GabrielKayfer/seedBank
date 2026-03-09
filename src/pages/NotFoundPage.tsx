import { Button } from "../components/Button/intex";
import { navigateTo } from "../router/navigation";
import { ActionRow, Eyebrow, PageContainer, PageDescription, PageSection, PageTitle } from "./PageStyles";

const NotFoundPage = () => {
  return (
    <PageSection>
      <PageContainer>
        <Eyebrow>404</Eyebrow>
        <PageTitle>Route not found.</PageTitle>
        <PageDescription>
          The page you tried to access does not exist in the current SeedBank navigation map.
        </PageDescription>
        <ActionRow>
          <Button
            as="a"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/");
            }}
          >
            Return to home
          </Button>
        </ActionRow>
      </PageContainer>
    </PageSection>
  );
};

export default NotFoundPage;
