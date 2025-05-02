import styled from "styled-components";

const CloseButtonStyled = styled.button`
    border: none;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    ${({ $position }) => {
        if($position === 'top') {
            return `
                position: absolute;
                top: 8px;
                right: 8px;
            `
        }
    }}
`

export {
    CloseButtonStyled
}