import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 60px 0;
    background-color: ${colors.DarkBlue};
    color: ${colors.whiteCold};
    min-height: 500px;
    margin-top: 0;`

export const FooterContent = styled.div`
    display: inline-flex;
    gap: 120px;
    justify-content: space-between;
    flex-wrap: nowrap;
    ` 

export const DownloadSection = styled.section`
`
export const Scan = styled.div`
    margin-top: 20px;
    display: inline-flex;
    gap: 60px;
    
    span {
        font-size: 30px;
        font-weight: 600;
        font-family: "Poppins", sans-serif;
    }`

export const ScanImg = styled.div`
    width: 160px;
    height: 160px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;`
    

export const Title = styled.h4`
    font-weight: 900;
    font-size: 40px;
    font-style: italic;
    font-family: "Inter", sans-serif;
    color: ${colors.whiteCold};` 

export const ActionList = styled.ul`
    padding: 0;
    
    li {
        list-style: none;
        font-size: 16px;
        font-weight: normal;
        font-family: "Poppins", sans-serif;
        color: ${colors.whiteCold};
        cursor: pointer;
        margin-bottom: 8px;`

export const About = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;`

export const NavSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;`

export const NavItems = styled.div`
    display: inline-flex;
    gap: 10px;
    
    img {
        width: 24px;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }`

export const TitleSection = styled.h4`
    font-weight: 600;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    color: ${colors.whiteCold};`