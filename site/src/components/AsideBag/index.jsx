/* eslint-disable react/prop-types */
import BlackScreen from '../BlackScreen';
import CardInBag from '../CardInBag';
import CloseButton from '../CloseButton';
import ToggleInput from '../ToggleInput';
import { AsideBagStyled, AsideHeaderStyled, ToggleInputContainerStyled } from "./style";
import { motion } from "framer-motion";
import errorPng from "../../assets/erro.png";

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
                        <CloseButton 
                            handleClick={() => asideBagStage(false)}
                        />
                    </AsideHeaderStyled>

                    <ToggleInputContainerStyled>
                        <ToggleInput title="Preço à vista" />
                    </ToggleInputContainerStyled>

                    <CardInBag 
                        title={"Produto 1"}
                        price={100}
                        img={errorPng}
                        defaultQuantity={1}
                    />

                </AsideBagStyled>
            </motion.div>
        </>
    )
} 

export default AsideBag;