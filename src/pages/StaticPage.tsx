import type { MouseEvent } from "react";
import { Button } from "../components/Button/intex";
import { staticPages, type StaticPageKey } from "../content/staticPages";
import { navigateTo } from "../router/navigation";
import { ActionRow, Eyebrow, PageContainer, PageDescription, PageSection, PageTitle } from "./PageStyles";

type StaticPageProps = {
  pageKey: StaticPageKey;
};

const StaticPage = ({ pageKey }: StaticPageProps) => {
  const page = staticPages[pageKey];

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <PageSection>
      <PageContainer>
        <Eyebrow>{page.eyebrow}</Eyebrow>
        <PageTitle>{page.title}</PageTitle>
        <PageDescription>{page.description}</PageDescription>
        <ActionRow>
          <Button as="a" href={page.primaryHref} onClick={(event) => handleNavigate(event, page.primaryHref)}>
            {page.primaryLabel}
          </Button>
          <Button as="a" href="/" variant="ghost" onClick={(event) => handleNavigate(event, "/")}>
            Back to home
          </Button>
        </ActionRow>
      </PageContainer>
    </PageSection>
  );
};

export default StaticPage;
