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
        object-fit: cover;
        border-radius: 4px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: min-content;

    h2 {
        width: 100%;
        max-width: 254px;
        
        overflow-wrap: break-word;
    }

    h2,
    span {
        font-size: 0.875rem;
        font-weight: 700;
    }
`

const QuantityContainer = styled.div`
    position: absolute;
    right: 8px;
    bottom: 8px;
`

export {
    CardInBagStyled,
    ImgContainer,
    TextContainer,
    QuantityContainer
}