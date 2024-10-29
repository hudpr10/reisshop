import styled from "styled-components";

const InputText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    position: relative;

    label {
        font-size: 1rem;
        font-weight: 700;
    }

    input {
        padding: 12px 16px;
        font-size: 0.875rem;
        border: none;
        outline: none;
        border-radius: 8px;
        transition: 200ms;
        color: var(--black);
    }

    input:hover {
        box-shadow: var(--shadow);
    }
`

const ErrorMsg = styled.span`
    position: absolute;
    bottom: -20px;
    font-size: 0.875rem;
    left: 4px;
    color: var(--red);
`

export {
    InputText,
    ErrorMsg
}