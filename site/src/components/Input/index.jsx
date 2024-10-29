import searchIcon from '../../assets/lupinha.svg'
import Button from '../Button'
import { InputContainer, HeaderSearch } from './style'

function Input() {
    return (
    <HeaderSearch>
        <InputContainer>
            <img src={searchIcon} alt="Icone de Busca" />
            <input type="text" placeholder='Pesquisar...' />
        </InputContainer>
        <Button 
            title="Buscar"
            largura="fixa"
        />
    </HeaderSearch>
    )
}

export default Input