/* eslint-disable react/prop-types */
import { Button, ImgStyled, NotificationStyled } from "./style"

function RoundedButton({ alt, bgcolor, icon, handleClick, notification }) {
    return (
        <Button $bgcolor={bgcolor} onClick={() => handleClick(alt)}>
            <ImgStyled src={icon} alt={alt} />
            {notification ? <NotificationStyled>{notification}</NotificationStyled> : null}
        </Button>
    )
}

export default RoundedButton