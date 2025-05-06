/* eslint-disable react/prop-types */
import { Button, ImgStyled, NotificationStyled } from "./style"

function RoundedButton({ alt, bgcolor, icon, handleClick, notification, areDisabled=false }) {
    return (
        <Button 
            $bgcolor={bgcolor} 
            onClick={() => handleClick(alt)}
            disabled={areDisabled}
        >
            <ImgStyled 
                src={icon} 
                alt={alt} 
            />
            {notification ? <NotificationStyled>{notification}</NotificationStyled> : null}
        </Button>
    )
}

export default RoundedButton