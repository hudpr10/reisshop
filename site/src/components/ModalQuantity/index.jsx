/* eslint-disable react/prop-types */
import RoundedButton from '../RoundedButton'
import MinusIcon from '../../assets/menos.svg'
import AddIcon from '../../assets/maisMenor.svg'
import { InputContainer, QuantityContainer, ErrorMsg } from './style'

function ModalQuantity({ inputValue, handleType, handleQuant, error }) {
    return (
        <InputContainer>
            <label htmlFor='estoque'>Estoque</label>
            <QuantityContainer>
                <RoundedButton bgcolor="red" icon={MinusIcon} alt="Menos" handleClick={(alt) => handleQuant(alt)} />
                <input type="number" id='estoque' value={inputValue} onChange={(e) => handleType(e.target.value)}/>
                <RoundedButton bgcolor="green" icon={AddIcon} alt="Mais" handleClick={(alt) => handleQuant(alt)} />
            </QuantityContainer>
            {error === "" ? null : <ErrorMsg>{error}</ErrorMsg>}
        </InputContainer>
    )
}

export default ModalQuantity