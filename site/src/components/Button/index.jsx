/* eslint-disable react/prop-types */
import addIcon from '../../assets/mais-big.svg'
import { ButtonContainer } from './style'

function Button({ title, largura, bgcolor, handleClick, icon, buttonDisable=false }) {
    return (
    <ButtonContainer 
        $icon={icon} 
        $largura={largura} 
        $bgcolor={bgcolor}
        disabled={buttonDisable}
        onClick={() => handleClick()}
    >
        {icon ? <img src={addIcon} alt="Icone de Busca" /> : null}
        <span>{title}</span>
    </ButtonContainer>
    )
}

export default Button