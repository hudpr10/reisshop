import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 8px;
    padding: 16px;

`

const LeftSide = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;

    img {
        width: 100px;
        height: 100px;
        border-radius: 4px;
    }

    div {
        width: 100%;
    }

    h2 {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 8px;
        color: var(--black);
        width: 100%;
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--black);
        width: 100%;
    }
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    ul {
        list-style: none;
        display: flex;
        gap: 32px;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 83px;

        h3 {
            font-size: 1rem;
            color: var(--gray);
            font-weight: 400;
            margin-bottom: 4px;
        }

        span {
            font-size: 1rem;
            color: var(--black);
            font-weight: 700;
        }
    }
`

export {
    CardContainer,
    LeftSide,
    RightSide
}