import type { MouseEvent } from "react";
import scan from "../../assets/scan.png";
import { footerLinks, socialLinks } from "../../content/landing";
import { navigateTo } from "../../router/navigation";
import { Section } from "../../styles/Section";
import {
  About,
  ActionItem,
  ActionList,
  ActionText,
  Copyright,
  DownloadSection,
  FooterContainer,
  FooterContent,
  FooterInner,
  NavItems,
  NavSection,
  Scan,
  ScanImg,
  ScanText,
  SocialItem,
  Title,
  TitleSection,
} from "./styles";

const LandingFooter = () => {
  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <Section $bg="DarkBlue" $py="md">
      <FooterContainer>
        <FooterInner>
          <FooterContent>
            <DownloadSection>
              <Title>The easy way to invest in the future</Title>
              <Scan>
                <ScanText>Scan to download the app:</ScanText>
                <ScanImg style={{ backgroundImage: `url(${scan})` }} />
              </Scan>
            </DownloadSection>
            <About>
              <TitleSection>About SeedBank</TitleSection>
              <ActionList>
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <ActionItem href={item.href} onClick={(event) => handleNavigate(event, item.href)}>
                      <ActionText>{item.label}</ActionText>
                    </ActionItem>
                  </li>
                ))}
              </ActionList>
            </About>
            <NavSection>
              <TitleSection>Stay in touch</TitleSection>
              <NavItems>
                {socialLinks.map((item) => (
                  <SocialItem key={item.label} aria-label={item.label}>
                    <img src={item.icon} alt={item.label} />
                  </SocialItem>
                ))}
              </NavItems>
            </NavSection>
          </FooterContent>
        </FooterInner>
        <Copyright>&copy; 2026 SeedBank. All rights reserved.</Copyright>
      </FooterContainer>
    </Section>
  );
};

export default LandingFooter;

