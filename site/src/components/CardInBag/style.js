import styled from "styled-components";

const CardInBagStyled = styled.div`
    position: relative;
    display: flex;
    gap: 8px;

    background-color: var(--white);
    padding: 8px;
    border-radius: 8px;
`

const ImgContainer = styled.div`
    height: 64px;
    
    img {
        width: 64px;
        height: 64px;
        object-fit: contain;
        border-radius: 4px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 156px;

    h2 {
        overflow-wrap: break-word;
    }

    h2,
    span {
        font-size: 0.875rem;
        font-weight: 700;
    }
`

const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const RemoveButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-align: end;
    font-size: 0.75rem;
    text-decoration: underline;

    color: var(--gray);
    transition: 200ms;

    &:hover {
        opacity: 0.7;
    }
`

export {
    CardInBagStyled,
    ImgContainer,
    TextContainer,
    ActionsContainer,
    RemoveButton
}