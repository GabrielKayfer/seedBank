import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FeaturesContainer = styled.section`
    padding: 80px 0;
    display: flex;
    background: linear-gradient(to bottom, #2d728f00 0%, #ffffff 100%);
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
`;

export const Card = styled.div`
    width: 100%;
    height: 300px;
    position: relative; 
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    background-color: ${colors.white}; 
    cursor: pointer;
`;

export const CardTitle = styled.span`
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);

    color: ${colors.PrimaryPurple};
    font-weight: 900;
    font-size: 22px;
    font-family: "Inter", sans-serif;
    text-align: center;
`;

export const ImgSection = styled.div`
    width: 350px;
    height: 350px;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 16px;
    background-position: center;
`

export const TextSectionContainer = styled.section`
    display: grid;
    padding: 10px 200px;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    background: linear-gradient(to bottom, #ffffff 100%, #2d728f00 0%);`

export const TextSection = styled.p`
    width: 100%;
    font-weight: normal;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    color: ${colors.Dark};
    
    span {
        color: ${colors.Emerald};
}`