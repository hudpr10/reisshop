/* eslint-disable react/prop-types */
import { Button, ImgStyled } from "./style"

function RoundedButton({ alt, bgcolor, icon, handleClick }) {
    return (
        <Button $bgcolor={bgcolor} onClick={() => handleClick(alt)}>
            <ImgStyled src={icon} alt={alt} />
        </Button>
    )
}

export default RoundedButton