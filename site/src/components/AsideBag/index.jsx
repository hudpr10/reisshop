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
import axios from 'axios';

function AsideBag({ setAsideBagOpen, asideBagList, setAsideBagList }) {
    const [priceAjust, setPriceAjust] = useState();
    const [total, setTotal] = useState(0);

    // Função para Atualizar os dados no banco
    async function atualizaEstoque(lista) {
        let produtos = []

        // Filtra os dados necessarios para enviar a API
        lista.map(produto => {
            produtos.push({
                id: produto.id,
                quantidade: produto.quantidadeInBag
            })
        })

        try {
            await axios.patch('http://localhost:5264/AtualizarVariosProdutos', produtos)
            window.location.reload()
        } catch (error) {
            console.error("Erro ao editar: ", error)
        }
    }

    return (
        <>
            <BlackScreen
                closeOnClick={() => setAsideBagOpen()}
            />
            <motion.div
                style={{ position: 'fixed', top: 0, right: 0 }}
                initial={{ opacity: 1, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 400 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <AsideBagStyled>
                    <AsideHeaderStyled>
                        <div>
                            <h2>Sacola de Produtos</h2>
                            <CloseButton
                                handleClick={() => setAsideBagOpen(false)}
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
                            handleClick={() => atualizaEstoque(asideBagList)}
                            buttonDisable={asideBagList.length === 0}
                        />
                    </>
                </AsideBagStyled>
            </motion.div>
        </>
    )
}

export default AsideBag;