/* eslint-disable no-constant-binary-expression */
/* eslint-disable react/prop-types */
import { BlackScreenStyled } from "./style.js"
import { motion } from "framer-motion"

function BlackScreen({ closeOnClick }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <BlackScreenStyled onClick={() => closeOnClick(false)} />
        </motion.div>
    )
}

export default BlackScreen