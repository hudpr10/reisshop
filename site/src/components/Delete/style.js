import styled from "styled-components";

const AreUSure = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: var(--light-gray);
    padding: 24px;
    z-index: 1;
    width: 400px;
    border-radius: 8px;
    align-items: flex-end;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
        display: flex;
        gap: 16px;
    }
`

export {
    AreUSure
}