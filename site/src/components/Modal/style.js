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

const CloseButton = styled.button`
    border: none;
    background-color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    border-radius: 50%;
    padding: 4px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
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
    CloseButton,
    ModalContainer,
    RowGap,
    ModalFooter
}