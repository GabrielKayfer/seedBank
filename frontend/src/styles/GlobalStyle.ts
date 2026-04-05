import { createGlobalStyle } from "styled-components";
import { sharedShellTopColor } from "./shellBackground";

export const GlobalCss = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
}

    body {
    background-color: ${sharedShellTopColor};
    color: ${({ theme }) => theme.colors.Dark};
    }
    
    html {
    background-color: ${sharedShellTopColor};
    scroll-behavior: smooth;
}
    
section[id] {
    scroll-margin-top: 100px;
    }`;
