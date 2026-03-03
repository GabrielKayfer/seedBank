import { colors } from "./colors";

export const theme = {
    colors,
    breakpoints: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        xxl: "80px",
    },

    radius: {
        sm: "6px",
        md: "12px",
        lg: "18px",
        xl: "32px",
    },
    typography: {
        fontFamily: {
            inter: '"Inter", sans-serif',
            poppins: '"Poppins", sans-serif',
        },
            fontSize: {
    titleP: "clamp(18px, 2vw, 22px)",
    titleM: "clamp(22px, 3vw, 34px)",
    titleG: "clamp(28px, 4vw, 44px)",

    bodySm: "clamp(12px, 1vw, 14px)",
    bodyMd: "clamp(14px, 1.2vw, 16px)",
    bodyLg: "clamp(16px, 1.4vw, 18px)",
            },
        fontWeight: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            black: 900,
        },
        lineHeight: {
            tight: 1.15,
            normal: 1.5,
        },
    },
    components: {
        button: {
            paddingX: { sm: "14px", md: "18px", lg: "22px" },
            paddingY: { sm: "10px", md: "14px", lg: "16px" },
            radius: { sm: "50px", md: "40px", lg: "32px" },
            fontSize: {
                sm: "14px",
                md: "16px",
                lg: "22px",
            },
        }
    },
    container: {
        maxWidth: "1024px",
        padding: "16px",
    },
} as const;