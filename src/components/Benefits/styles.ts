import styled from "styled-components";
import { colors } from "../../styles/colors";

export const BenefitsContainer = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 60px;
    padding: 60px 0 0 0;
    background-color: ${colors.whiteCold};
    padding-bottom: 100px;
    min-height: 700px;
    margin-bottom: 0;`

export const BenefitsText = styled.p`
    font-size: 18px;
    margin-bottom: 30px;
    font-family: "Poppins", sans-serif;`

export const Title = styled.h2`
    font-weight: 900;
    font-size: 34px;
    font-style: normal;
    font-family: "Inter", sans-serif;
    color: ${colors.PrimaryPurple};
    margin-bottom: 40px;`

export const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;

    .highlight {
        transform: scale(1.05);
        &:hover {
            transform: translateY(-8px) scale(1.05);
                }
        }
    `

export const BenefitsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;`

export const SubTitle = styled.h3`
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 18px;
    color: ${colors.PrimaryPurple};`

export const BenefitsCard = styled.div`
display: block;
width: 100%;
margin: 0 auto;
background: ${colors.white};
padding: 40px 32px;
border-radius: 16px;
cursor: pointer;
box-shadow: 0 20px 40px rgba(0,0,0,0.3);
border: 3px solid ${colors.PrimaryPurple};

&:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5);
}
`