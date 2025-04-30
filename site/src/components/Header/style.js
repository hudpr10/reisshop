import styled from "styled-components";

const HeaderContainer = styled.header`
    margin-top: 32px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    position: relative;
`

const ButtonsContainerStyled = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`

export {
    HeaderContainer,
    ButtonsContainerStyled
}