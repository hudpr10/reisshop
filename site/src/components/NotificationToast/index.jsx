/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import CloseButton from "../CloseButton/index.jsx"
import { ToastStyled, LeftSide } from "./style.js"
import checkIcon from "../../assets/check.svg"
import { useEffect } from "react"
import { motion } from 'framer-motion'

function NotificationToast({ toastObject, setToastObject, setAsideBagOpen }) {
    useEffect(() => {
        let timeout

        timeout = setTimeout(() => {
            setToastObject(() => ({ name: "", open: false }))
        }, 3000)

        return () => clearTimeout(timeout)
    }, [toastObject])

    return (
        <motion.div
            key="toast"
            style={{ position: 'fixed', bottom: 36, right: 36 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <ToastStyled onClick={() => { setToastObject(() => ({ name: "", open: false })); setAsideBagOpen(true) }}>
                <LeftSide>
                    <img src={checkIcon} alt="Icone de Verificado" />
                    <div>
                        <h2>Adicionado a sacola!</h2>
                        <p>{toastObject.name}</p>
                    </div>
                </LeftSide>

                <CloseButton handleClick={() => setToastObject(() => ({ name: "", open: false }))} />
            </ToastStyled>
        </motion.div>
    )
}

export default NotificationToast