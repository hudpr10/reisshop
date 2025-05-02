/* eslint-disable react/prop-types */
import addIcon from '../../assets/mais-big.svg'
import { ButtonContainer } from './style'

function Button({ title, largura, bgcolor, handleClick, icon }) {
    return (
    <ButtonContainer 
        $icon={icon} 
        $largura={largura} 
        $bgcolor={bgcolor}
        onClick={() => handleClick()}
    >
        {icon ? <img src={addIcon} alt="Icone de Busca" /> : null}
        <span>{title}</span>
    </ButtonContainer>
    )
}

export default Button