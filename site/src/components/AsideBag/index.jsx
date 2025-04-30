/* eslint-disable react/prop-types */
import closeIcon from '../../assets/fechar.svg'
import { BlackScreen } from '../Modal/style';
import RoundedButton from '../RoundedButton';
import { AsideBagStyled, AsideHeaderStyled } from "./style";
import { motion } from "framer-motion";

function AsideBag({ asideBagStage }) {
    return (
        <>
            <BlackScreen />
            <motion.div
                style={{ position: 'absolute', top: 0, right: 0 }}
                initial={{ opacity: 0, x: 400 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <AsideBagStyled>
                    <AsideHeaderStyled>
                        <span>Sacola de Produtos</span>
                        <RoundedButton 
                            icon={closeIcon}
                            bgcolor={""}
                            handleClick={() => asideBagStage(false)}
                        />
                    </AsideHeaderStyled>
                </AsideBagStyled>        
            </motion.div>
        </>
    )
} 

export default AsideBag;