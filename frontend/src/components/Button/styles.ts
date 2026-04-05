import styled, { css } from "styled-components";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

type StyledButtonProps = {
    $variant: Variant;
    $size: Size;
    $fullWidth: boolean;
};

const sizeStyles: Record<Size, ReturnType<typeof css>> = {
    sm: css`
    padding: ${({ theme }) =>
            `${theme.components.button.paddingY.sm} ${theme.components.button.paddingX.sm}`};
    font-size: ${({ theme }) => theme.components.button.fontSize.sm};
    border-radius: ${({ theme }) => theme.components.button.radius.sm};
    `,
    md: css`
    padding: ${({ theme }) =>
            `${theme.components.button.paddingY.md} ${theme.components.button.paddingX.md}`};
    font-size: ${({ theme }) => theme.components.button.fontSize.md};
    border-radius: ${({ theme }) => theme.components.button.radius.md};
    `,
    lg: css`
    padding: ${({ theme }) =>
            `${theme.components.button.paddingY.lg} ${theme.components.button.paddingX.lg}`};
    font-size: ${({ theme }) => theme.components.button.fontSize.lg};
    border-radius: ${({ theme }) => theme.components.button.radius.lg};
    `,
};

const variantStyles: Record<Variant, ReturnType<typeof css>> = {
    primary: css`
    background: ${({ theme }) => theme.colors.PrimaryPurple};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;

    &:hover {
        filter: brightness(0.95);
    }
    `,
    ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.Emerald};
    border: 2px solid ${({ theme }) => theme.colors.white};

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.Emerald};
    }
    `,
};

export const StyledButton = styled.button<StyledButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};

    font-family: ${({ theme }) => theme.typography.fontFamily.poppins};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};

    cursor: pointer;
    transition: 0.2s ease;
    text-decoration: none;
    white-space: nowrap;

    ${({ $size }) => sizeStyles[$size]}
    ${({ $variant }) => variantStyles[$variant]}

    ${({ $fullWidth }) =>
            $fullWidth &&
            css`
        width: 100%;
        `}

    &:focus-visible {
        outline: 3px solid rgba(45, 114, 143, 0.45);
        outline-offset: 2px;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;