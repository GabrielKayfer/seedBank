import scan from "../../assets/scan.png";
import { footerLinks, socialLinks } from "../../content/landing";
import { Section } from "../../styles/Section";
import {
  About,
  ActionItem,
  ActionList,
  DownloadSection,
  FooterContainer,
  FooterContent,
  FooterInner,
  NavItems,
  NavSection,
  Scan,
  ScanImg,
  SocialItem,
  Title,
  TitleSection,
} from "./styles";

const Footer = () => {
  return (
    <Section $bg="DarkBlue" $py="md">
      <FooterContainer>
        <FooterInner>
          <FooterContent>
            <DownloadSection>
              <Title>The easy way to invest in the future</Title>
              <Scan>
                <span>Scan to download the app:</span>
                <ScanImg style={{ backgroundImage: `url(${scan})` }} />
              </Scan>
            </DownloadSection>
            <About>
              <TitleSection>About SeedBank</TitleSection>
              <ActionList>
                {footerLinks.map((item) => (
                  <li key={item}>
                    <ActionItem href="#support">{item}</ActionItem>
                  </li>
                ))}
              </ActionList>
            </About>
            <NavSection>
              <TitleSection>Stay in touch</TitleSection>
              <NavItems>
                {socialLinks.map((item) => (
                  <SocialItem key={item.label} href="#support" aria-label={item.label}>
                    <img src={item.icon} alt={item.label} />
                  </SocialItem>
                ))}
              </NavItems>
            </NavSection>
          </FooterContent>
        </FooterInner>
        <p>&copy; 2026 SeedBank. All rights reserved.</p>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
