import styled from "styled-components";

const AsideBagStyled = styled.aside`
    position: absolute;
    top: 0;
    right: 0;
    padding: 24px;

    background-color: var(--light-gray);
    width: 390px;
    height: 100vh;
`

const AsideHeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
`

export {
    AsideBagStyled,
    AsideHeaderStyled
}