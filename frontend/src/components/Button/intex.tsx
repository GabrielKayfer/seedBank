import React from "react";
import { StyledButton } from "./styles";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps<T extends React.ElementType> = {
    as?: T;
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends React.ElementType = "button">({
    as,
    variant = "primary",
    size = "md",
    fullWidth = false,
    children,
    ...rest
}: ButtonProps<T>) {
    const Component = as || "button";

    return (
        <StyledButton
            as={Component}
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}