import styled from "styled-components";

const CloseButtonStyled = styled.button`
    border: none;
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    width: min-content;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    transition: 200ms;

    ${({ $position }) => {
        if($position === 'top') {
            return `
                position: absolute;
                top: 8px;
                right: 8px;
            `
        }
    }}

    &:hover {
        opacity: 0.7;
    }
`

export {
    CloseButtonStyled
}