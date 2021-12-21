import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        font-family: 'Oswald', 'Roboto', 'Open-Sans';
        font-weight: 400;
        margin: 0;
    }

    body {
        mering: 0;
        padding: 0;
        background-color: #011627;
        font-family: 'Montserrat', 'Roboto', 'Open-Sans';
        color: #fff;
    }
`;
export default GlobalStyles;
