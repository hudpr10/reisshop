import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    position: relative;

    input[type="checkbox"] {
        display: none;
    }

    span {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }
    
    label {
        font-size: 0.875rem;
        cursor: pointer;
    }

    input[type="checkbox"], span {
        width: 40px;
        height: 20px;
        background-color: var(--white);
        border-radius: 100px;
    }

    span::after {
        content: "";
        width: 20px;
        height: 20px;
        background-color: var(--red);
        border-radius: 50px;
        position: absolute;
        transition: 200ms;
        left: 20px;
    }

    ${({ $toggleActive }) => {
        if ($toggleActive) {
            return `
                span::after {
                    left: 20px;
                    background-color: var(--green);
                }
            `
        } else {
            return `
                span::after {
                    left: 0px;
                    background-color: var(--gray);
                }
            `
        }
    }}
`

export {
    InputContainer
}