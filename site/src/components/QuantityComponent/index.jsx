/* eslint-disable react/prop-types */
import RoundedButton from '../RoundedButton'
import MinusIcon from '../../assets/menos.svg'
import AddIcon from '../../assets/mais.svg'
import { InputContainer, QuantityContainer, ErrorMsg } from './style'

function ModalQuantity({ defaultQuantity, setDefaultQuantity, label, width, canIncrement, inputReadOnly=false, padding }) {
    function changeQuantity(type) {
        switch(type) {
            case 'Mais':
                // Pode adicionar mais itens a sacola
                if(canIncrement) {
                    setDefaultQuantity(Number(defaultQuantity) + 1)
                } 
                break
            case 'Menos':
                // Pode tirar itens do estoque
                if(defaultQuantity <= 0) {
                    break
                } else {
                    setDefaultQuantity(Number(defaultQuantity) - 1)
                }
        }
    }

    return (
        <InputContainer>
            {label !== "" ? <label htmlFor={label}>{label}</label> : null}
            <QuantityContainer $width={width}>
                <RoundedButton
                    padding={padding}
                    bgcolor="red" 
                    icon={MinusIcon} 
                    alt="Menos" 
                    handleClick={(alt) => changeQuantity(alt)} 
                />
                <input
                    readOnly={inputReadOnly}
                    type="number" 
                    id={label} 
                    value={defaultQuantity} 
                    onChange={(e) => setDefaultQuantity(e.target.value)}
                />
                <RoundedButton
                    padding={padding}
                    bgcolor="green" 
                    icon={AddIcon} 
                    alt="Mais" 
                    handleClick={(alt) => changeQuantity(alt)}
                    areDisabled={!canIncrement}
                />
            </QuantityContainer>
            {defaultQuantity < 0 ? <ErrorMsg>O estoque deve ser maior que 0</ErrorMsg> : null}
        </InputContainer>
    )
}

export default ModalQuantity
