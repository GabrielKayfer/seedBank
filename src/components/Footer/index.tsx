import youtubeLogo from '../../assets/youtubeLogo.png';
import xLogo from '../../assets/xLogo.png';
import facebookLogo from '../../assets/facebookLogo.svg';
import linkedinLogo from '../../assets/linkedinLogo.png';
import tiktokLogo from '../../assets/tiktokLogo.png';
import scan from '../../assets/scan.png';

import { About, FooterContainer, NavSection, DownloadSection, FooterContent, NavItems, TitleSection, Title, Scan, ScanImg, ActionList } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <DownloadSection>
                <Title>The easy way to invest in the future</Title>
                <Scan>
                    <span>Scan to download the app:</span>
                    <ScanImg  style={{ backgroundImage: `url(${scan})` }}></ScanImg>
                </Scan>
            </DownloadSection>
            <About>
                <TitleSection>About SeedBank</TitleSection>
                <ActionList>
                    <li>Legal</li>
                    <li>Licenses</li>
                    <li>Security</li>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Status</li>
                </ActionList>
            </About>
            <NavSection>
                <TitleSection>Stay in touch</TitleSection>
                <NavItems>
                    <img src={youtubeLogo} alt="YouTube" />
                    <img src={xLogo} alt="X (Twitter)" />
                    <img src={facebookLogo} alt="Facebook" />
                    <img src={linkedinLogo} alt="LinkedIn" />
                    <img src={tiktokLogo} alt="TikTok" />
                </NavItems>
            </NavSection>
            </FooterContent>
            <p>&copy; 2026 SeedBank. All rights reserved.</p>
        </FooterContainer>
    );
}

export default Footer;