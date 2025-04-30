import styled from "styled-components";

const BlackScreen = styled.div`
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.4;
`

const ModalContainer = styled.div`
    background-color: var(--light-gray);
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 8px;
    width: 634px;
    padding: 24px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
`

const RowGap = styled.div`
    display: flex;
    gap: ${({ $distance }) => $distance};
`
const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export {
    BlackScreen,
    ModalContainer,
    RowGap,
    ModalFooter
}