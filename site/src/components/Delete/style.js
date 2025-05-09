import styled from "styled-components";

const AreUSure = styled.div`
    position: fixed;

    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: var(--light-gray);
    padding: 24px;
    width: 400px;
    border-radius: 8px;
    align-items: flex-end;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 2;

    div {
        display: flex;
        gap: 16px;
    }
`

export {
    AreUSure
}