/* eslint-disable react/prop-types */
import { Button, ImgStyled, NotificationStyled } from "./style"

function RoundedButton({ alt, bgcolor, icon, handleClick, notification, areDisabled=false, padding='8px' }) {
    return (
        <Button 
            $bgcolor={bgcolor} 
            onClick={() => handleClick(alt)}
            disabled={areDisabled}
        >
            <ImgStyled 
                src={icon} 
                alt={alt} 
                $imgPadding={padding}
            />
            {notification ? <NotificationStyled>{notification}</NotificationStyled> : null}
        </Button>
    )
}

export default RoundedButton