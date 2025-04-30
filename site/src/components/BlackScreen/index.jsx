import { BlackScreenStyled } from "./style.js"
import { motion } from "framer-motion"

function BlackScreen() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <BlackScreenStyled />
        </motion.div>
    )
}

export default BlackScreen