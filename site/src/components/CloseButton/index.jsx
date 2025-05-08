/* eslint-disable react/prop-types */
import { CloseButtonStyled } from "./style";
import closeIcon from '../../assets/fechar.svg'

function CloseButton({ handleClick, position }) {
    return (
        <CloseButtonStyled onClick={(e) => {e.stopPropagation(); handleClick()}} $position={position}> 
            <img src={closeIcon} alt="Fechar" />
        </CloseButtonStyled>
    )
}

export default CloseButton;