// Section.ts
import styled from "styled-components";
import { colors } from "../styles/colors";

    type SectionProps = {
    $py?: "md" | "lg" | "xl" | "xxl";
    $bg?: keyof typeof colors; 
    };

    export const Section = styled.section<SectionProps>`
    padding: ${({ theme, $py }) => theme.spacing[$py ?? "xxl"]} 0;
    background-color: ${({ $bg }) => ($bg ? colors[$bg] : "transparent")};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing.xl} 0;
    }
    `;