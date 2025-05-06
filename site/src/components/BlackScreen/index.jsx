/* eslint-disable react/prop-types */
import { BlackScreenStyled } from "./style.js"
import { motion } from "framer-motion"

function BlackScreen({ closeOnClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <BlackScreenStyled onClick={() => closeOnClick(false)} />
        </motion.div>
    )
}

export default BlackScreen