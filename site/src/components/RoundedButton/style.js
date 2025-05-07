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

    background-color: ${({ $bgcolor }) => 'var(--' + $bgcolor + ')'};
`

const ImgStyled = styled.img`
    padding: ${({ $imgPadding }) => $imgPadding };
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