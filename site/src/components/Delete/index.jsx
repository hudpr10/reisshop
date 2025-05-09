/* eslint-disable react/prop-types */
import BlackScreen from '../BlackScreen'
import Button from '../Button'
import { AreUSure } from './style'
import { AnimatePresence, motion } from 'framer-motion'

function Delete({ openDelete, close, removeProduct }) {
    return (
        <AnimatePresence>
            {openDelete && (
                <>
                    <BlackScreen closeOnClick={() => close()} />
                    <motion.div
                        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        exit={{ opacity: 0 }}
                    >
                        <AreUSure>
                            <h2>Tem certeza que quer apagar esse produto?</h2>
                            <div>
                                <Button title="Cancelar" handleClick={() => close()} />
                                <Button title="Apagar" bgcolor="red" handleClick={() => removeProduct()} />
                            </div>
                        </AreUSure> 
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Delete