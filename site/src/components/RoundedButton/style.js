import styled from "styled-components"

const Button = styled.div`
    width: 32px;
    height: 32px;
    cursor: pointer;
    background-color: var(--white-text);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: 200ms;

    &:hover {
        box-shadow: var(--shadow);
        opacity: 0.7;
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

export {
    Button
}