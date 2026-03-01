import { colors } from "./colors";

export const theme = {
    colors,
    breakpoints: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
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
            titleP: "22px",
            titleM: "34px",
            titleG: "38px",
            bodySm: "14px",
            bodyMd: "16px",
            bodyLg: "18px",
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
        maxWidth: "1200px",
        padding: "16px",
    },
} as const;