import styled from "styled-components"

const Button = styled.button`
    position: relative;

    cursor: pointer;
    background-color: var(--white-text);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 200ms;
    border: none;

    &:hover {
        box-shadow: var(--shadow);
        opacity: 0.7;
    }

    &:disabled {
        background-color: var(--gray);
        cursor: not-allowed;
    }

    ${({ $bgcolor }) => {
        if ($bgcolor === 'green')
            return `
                background-color: var(--green);
            `
        else if ($bgcolor === 'red')
            return `
                background-color: var(--red);
            `
        else if ($bgcolor === 'white-text')
            return `
                background-color: var(--white-text)
            `
    }}
`

const ImgStyled = styled.img`
    padding: 8px;
`

const NotificationStyled = styled.span`
    background-color: var(--red);
    color: var(--white-text);
    width: 16px;
    height: 16px;

    text-align: center;
    line-height: 16px;
    border-radius: 100%;
    font-size: 0.75rem;

    position: absolute;
    top: -4px;
    right: -4px;
`

export {
    Button,
    ImgStyled,
    NotificationStyled
}