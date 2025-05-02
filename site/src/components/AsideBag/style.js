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

    span {
        font-size: 0.875rem;
        font-weight: 700;
    }
`

const ToggleInputContainerStyled = styled.div`
    margin: 8px 0 24px 0;
    width: min-content;
    white-space: nowrap;

    label {
        font-size: 0.875rem;
        color: var(--gray);
    }
`

const CardInBagContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const EmptyMsg = styled.p`
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: var(--gray);
`

export {
    AsideBagStyled,
    AsideHeaderStyled,
    ToggleInputContainerStyled,
    CardInBagContainerStyled,
    EmptyMsg
}