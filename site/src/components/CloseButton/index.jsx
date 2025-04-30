/* eslint-disable react/prop-types */
import { CloseButtonStyled } from "./style";
import closeIcon from '../../assets/fechar.svg'

function CloseButton({ handleClick }) {
    return (
        <CloseButtonStyled onClick={() => handleClick()}> 
            <img src={closeIcon} alt="Fechar" />
        </CloseButtonStyled>
    )
}

export default CloseButton;