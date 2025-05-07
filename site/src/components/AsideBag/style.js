import styled from "styled-components";

const AsideBagStyled = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    padding: 24px;

    background-color: var(--light-gray);
    width: 390px;
    height: 100vh;
    border-radius: 8px 0 0 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const AsideHeaderStyled = styled.header`
    div {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-size: 1rem;
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

    overflow-y: auto;
    height: 100%;
`

const TotalContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    margin: 16px 0;

    span {
        color: var(--gray);
        font-weight: 700;
        font-size: 0.875rem;
    }

    strong {
        font-size: 1.125rem;
        font-weight: 700;
    }
`

export {
    AsideBagStyled,
    AsideHeaderStyled,
    ToggleInputContainerStyled,
    CardInBagContainerStyled,
    TotalContainerStyled,
}