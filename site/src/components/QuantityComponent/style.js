import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;

    label {
        font-size: 1rem;
        font-weight: 700;
    }
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    background-color: var(--white);
    border-radius: 24px;

    input {
        text-align: center;
        border: none;
        outline: none;
        font-size: 0.875rem;

        ${({ $width}) => {
            if($width) {
                return `
                    width: ${$width};
                `
                }
            }
        }
    }

    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
    InputContainer,
    QuantityContainer,
    ErrorMsg
}