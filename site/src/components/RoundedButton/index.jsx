/* eslint-disable react/prop-types */
import { Button } from "./style"

function RoundedButton({ alt, bgcolor, icon, handleClick }) {
    return (
        <Button $bgcolor={bgcolor} onClick={() => handleClick(alt)}>
            <img src={icon} alt={alt} />
        </Button>
    )
}

export default RoundedButton