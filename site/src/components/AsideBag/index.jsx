/* eslint-disable react/prop-types */
import BlackScreen from '../BlackScreen';
import CardInBag from '../CardInBag';
import CloseButton from '../CloseButton';
import ToggleInput from '../ToggleInput';
import { AsideBagStyled, AsideHeaderStyled, ToggleInputContainerStyled, CardInBagContainerStyled, TotalContainerStyled } from "./style";
import { motion } from "framer-motion";
import Button from '../Button';
import { ErrorText } from '../../globalStyles';
import { useState } from 'react';

function AsideBag({ asideBagStage, asideBagList, setAsideBagList }) {
    const [priceAjust, setPriceAjust] = useState();
    const [total, setTotal] = useState(0);

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
                        <div>
                            <span>Sacola de Produtos</span>
                            <CloseButton 
                                handleClick={() => asideBagStage(false)}
                            />
                        </div>

                        <ToggleInputContainerStyled>
                            <ToggleInput 
                                title="Preço à vista" 
                                handleClick={(enable) => setPriceAjust(enable)}
                            />
                        </ToggleInputContainerStyled>
                    </AsideHeaderStyled>

                    <CardInBagContainerStyled>
                        {asideBagList.length === 0 ? <ErrorText>A sacola está vazia!</ErrorText> : null}
                        {asideBagList.map((product => {
                            return <CardInBag 
                                key={product.id}
                                id={product.id}
                                title={product.titulo}
                                img={product.foto}
                                defaultQuantity={product.quantidadeInBag}

                                priceAjust={priceAjust}
                                attTotal={setTotal}

                                asideBagList={asideBagList}
                                setAsideBagList={setAsideBagList}
                            />
                        }))}
                    </CardInBagContainerStyled>
                    
                    <>
                        <TotalContainerStyled>
                            <span>Total:</span>
                            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
                        </TotalContainerStyled>
                        <Button 
                            title="Concluir"
                            bgcolor="green"
                            largura="completa"
                            handleClick={() => console.log(asideBagList)}
                            buttonDisable={asideBagList.length === 0}
                        />
                    </>
                </AsideBagStyled>
            </motion.div>
        </>
    )
} 

export default AsideBag;