import styled from "styled-components";

const ButtonContainer = styled.button`
    ${({ $icon }) => {
        if ($icon === "true") {
            return `
                position: relative;

                img {
                    position: absolute;
                    left: 16px;
                    top: 11px;
                    z-index: 0;
                }

                span {
                    padding: 13px 16px 13px 56px;
                }
            `
        } else {
            return `
                text-align: center;

                span {
                    padding: 13px 16px 13px 16px;
                }
            `
        }
    }}

    ${({ $bgcolor }) => {
        if ($bgcolor === "green") {
            return `
                background-color: var(--green);
                
                span {
                    color: var(--white)
                }
            `    
        } else if ($bgcolor === "red") {
            return `
                background-color: var(--red);

                span {
                    color: var(--white);
                }
            `
        } else {
            return `
                background-color: var(--white);

                span {
                    color: var(--gray)
                }
            `
        }
    }}

    ${({ $largura }) => {
        if($largura === "fixa") {
            return `
                width: 195px;
            `
        } else if($largura === "completa") {
            return `
                width: 100%;
            `
        } else {
            return `
            width: min-content;
            `
        }
    }}

    border-radius: 8px;
    border: none;
    display: flex;
    gap: 16px;
    cursor: pointer;
    transition: 200ms;

    span {
        font-size: 1rem;
        white-space: nowrap;
        width: 100%;
        font-weight: 400;
    }

    &:hover {
        box-shadow: var(--shadow);
        opacity: 0.7;
    }
`

export {
    ButtonContainer
}