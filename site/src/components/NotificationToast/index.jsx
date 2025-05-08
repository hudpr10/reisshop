/* eslint-disable react/prop-types */
import CloseButton from "../CloseButton/index.jsx"
import { ToastStyled, LeftSide } from "./style.js"
import checkIcon from "../../assets/check.svg"
import { useEffect } from "react"

function NotificationToast({ productName, setToastOpen, setAsideBagOpen }) {
    useEffect(() => {
        setTimeout(() => {
            setToastOpen("")
        }, 3000)
    }, [productName])

    return (
        <ToastStyled onClick={() => {setToastOpen(""); setAsideBagOpen(true)}}>
            <LeftSide>
                <img src={checkIcon} alt="Icone de Verificado" />
                <div>
                    <h2>Adicionado a sacola!</h2>
                    <p>{productName}</p>
                </div>
            </LeftSide>

            <CloseButton handleClick={() => setToastOpen("")}/>
        </ToastStyled>
    )
}

export default NotificationToast