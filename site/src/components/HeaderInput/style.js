import styled from "styled-components";

const HeaderSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

const InputContainer = styled.div`
    background-color: var(--white);
    width: 416px;
    position: relative;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    
    input {
        border-radius: 8px;
        padding: 13px 16px 13px 56px;
        font-size: 1rem;
        background-color: transparent;
        outline: none;
        border: none;
        width: 100%;
        transition: 200ms;
        color: var(--black);
    }

    input:hover, input:focus {
        box-shadow: var(--shadow);
    }

    img {
        position: absolute;
        left: 16px;
        top: 11px;
        z-index: 0;
    }
`

export {
    HeaderSearch,
    InputContainer
}