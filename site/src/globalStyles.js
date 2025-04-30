import styled, { createGlobalStyle } from "styled-components";

const MainStyled = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --white-text: #F4F4F4;
        --gray: #8B8B8B;
        --light-gray: #EBEBEB;
        --green: #37BB16;
        --shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        --black: #272727;
        --red: #C52B2B;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #272727;
        font-family: "Lato", sans-serif;
    }

    body {
        background-color: var(--light-gray);
        max-width: 1100px;
        margin: 0 auto;

        overflow-x: hidden;
    }
`

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 72px 0 32px 0;
`

const ErrorText = styled.h3`
    color: var(--gray);
    text-align: center;
    margin-top: 40px;
`

export {
    MainStyled,
    MainContainer,
    ErrorText
}