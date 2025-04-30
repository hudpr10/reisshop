import styled from "styled-components";

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
    ModalContainer,
    RowGap,
    ModalFooter
}