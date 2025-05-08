import styled from "styled-components";

const ToastStyled = styled.div`
    width: 305px;
    z-index: 1;
    cursor: pointer;

    position: fixed;
    right: 24px;
    bottom: 24px;

    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-radius: 8px;

    background-color: #B4F0AA;

    button {
        z-index: 10;
    }
`

const LeftSide = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    img {
        background-color: var(--green);
        border-radius: 100%;
        padding: 4px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    h2 {
        font-size: 1rem;
        font-weight: 700;
    }

    p {
        font-size: 0.875rem;
    }
`

export {
    ToastStyled,
    LeftSide
}