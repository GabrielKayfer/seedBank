import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalCss = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
}

    body {
    background-color: ${colors.SoftPurple};
    color: ${colors.Dark};
    padding-top: 40px;
    }
    
    html {
    scroll-behavior: smooth;
}
    
section[id] {
    scroll-margin-top: 100px;
    }`