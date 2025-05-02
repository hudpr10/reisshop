/* eslint-disable react/prop-types */
import RoundedButton from '../RoundedButton'
import MinusIcon from '../../assets/menos.svg'
import AddIcon from '../../assets/mais.svg'
import { InputContainer, QuantityContainer, ErrorMsg } from './style'

function ModalQuantity({ defaultQuantity, setDefaultQuantity, label, width }) {
    function changeQuantity(type) {
        switch(type) {
            case 'Mais':
                setDefaultQuantity(Number(defaultQuantity) + 1)
                break
            case 'Menos':
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
                    bgcolor="red" 
                    icon={MinusIcon} 
                    alt="Menos" 
                    handleClick={(alt) => changeQuantity(alt)} 
                />
                <input 
                    type="number" 
                    id={label} 
                    value={defaultQuantity} 
                    onChange={(e) => setDefaultQuantity(e.target.value)}
                />
                <RoundedButton 
                    bgcolor="green" 
                    icon={AddIcon} 
                    alt="Mais" 
                    handleClick={(alt) => changeQuantity(alt)} 
                />
            </QuantityContainer>
            {defaultQuantity < 0 ? <ErrorMsg>O estoque deve ser maior que 0</ErrorMsg> : null}
        </InputContainer>
    )
}

export default ModalQuantity
