/* eslint-disable react/prop-types */
import Button from "../Button"
import ModalInput from "../ModalInput"
import QuantityComponent from "../QuantityComponent"
import { ModalContainer, RowGap, ModalFooter } from "./style"
import { useState } from "react"
import Delete from "../Delete"
import ToggleInput from "../ToggleInput"
import CloseButton from "../CloseButton"
import axios from "axios"
import { motion } from "framer-motion";
import BlackScreen from "../BlackScreen"

function Modal({ modalStage, product }) {
    const [title, setTitle] = useState(product.titulo)
    const [desc, setDesc] = useState(product.descricao)
    const [image, setImage] = useState(product.foto)
    const [pricePrazo, setPricePrazo] = useState(product.precoPrazo)
    const [priceVista, setPriceVista] = useState(product.precoVista)
    const [quant, setQuant] = useState(product.estoque)

    const [openDelete, setOpenDelete] = useState(false);
    const [enablePriceAjust, setEnablePriceAjust] = useState()

    function priceAjust(input) {
        if(!enablePriceAjust) {
            if(input === "prazo") {
                setPriceVista(Number(pricePrazo) - (pricePrazo * 0.1))
            } else if(input === "vista") {
                setPricePrazo(Number(priceVista) + (priceVista * 0.1))
            }
        }
    }

    async function validInputs(buttonName) {
        if(title !== "" && desc !== "" && pricePrazo !== "" && priceVista !== "" && quant >= 0 && quant !== "") {
            let produtoNovo = {
                titulo: title,
                descricao: desc,
                foto: image,
                precoPrazo: pricePrazo,
                precoVista: priceVista,
                estoque: quant
            }

            if(buttonName === 'Adicionar') {
                postProduto(produtoNovo)
            } else if(buttonName === 'Salvar') {
                produtoNovo = {
                    ...produtoNovo,
                    id: product.id
                }
                patchProduto(produtoNovo)
            }
        } 
    }

    async function postProduto(produto) {
        try {
            await axios.post('http://localhost:5264/NovoProduto', produto)
            window.location.reload()
        } catch (error) {
            console.error("Erro ao enviar dados: ", error)
        }
    }

    async function patchProduto(produto) {
        try {
            await axios.patch('http://localhost:5264/AtualizarProduto', produto)
            window.location.reload()
        } catch (error) {
            console.error("Erro ao editar: ", error)
        }
    }

    async function deleteProduto(id) {
        try {
            await axios.delete(`http://localhost:5264/ApagarProduto/${id}`)
            window.location.reload()
        } catch (error) {
            console.error("Erro ao deletar produto: ", error)
        }
    }

    return (
        <>
            <BlackScreen 
                closeOnClick={() => modalStage(false)}
            />
            <motion.div
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)' }}
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <ModalContainer>
                    <CloseButton 
                        handleClick={() => modalStage(false)} 
                        position="top"
                    />

                    <ModalInput 
                        title="Título" 
                        inputValue={title} 
                        handleType={(value) => setTitle(value)} 
                        handleBlur={() => null}
                        error={title === ""? "Digite o nome do produto" : ""}
                    />
                    <ModalInput 
                        title="Descrição" 
                        inputValue={desc} 
                        handleType={(value) => setDesc(value)} 
                        handleBlur={() => null}
                        error={desc === "" ? "Digite as características do produto" : ""}
                    />
                    <ModalInput 
                        title="Foto" 
                        inputValue={image} 
                        handleType={(value) => setImage(value)} 
                        handleBlur={() => null}
                    />
                    <RowGap $distance='24px'>
                        <ModalInput 
                            type="number"
                            title="Preço à prazo" 
                            inputValue={pricePrazo} 
                            handleType={(value) => setPricePrazo(value)}
                            handleBlur={() => priceAjust('prazo')}
                            error={pricePrazo <= 0 ? 'Digite o preço à prazo' : ''}
                        />
                        <ModalInput 
                            type="number"
                            title="Preço à vista" 
                            inputValue={priceVista} 
                            handleType={(value) => setPriceVista(value)}
                            handleBlur={() => priceAjust('vista')}
                            error={priceVista <= 0 ? 'Digite o preço à vista' : ''}
                        />
                    </RowGap>
                    <ToggleInput 
                        title="Ajustar preços automaticamente" 
                        handleClick={(enable) => setEnablePriceAjust(enable)}
                    />
                    <ModalFooter>
                        <QuantityComponent
                            label="Estoque"
                            defaultQuantity={quant}
                            setDefaultQuantity={setQuant}
                            width="200px"
                            canIncrement={true}
                        />
                        <RowGap $distance='16px'>
                            {product.titulo !== "" ? <Button bgcolor="red" title="Apagar" handleClick={() => setOpenDelete(true)} /> : null}
                            <Button title="Cancelar" handleClick={() => modalStage(false)} />
                            {product.titulo === "" 
                                ? <Button title="Adicionar" bgcolor="green" handleClick={() => validInputs('Adicionar')} /> 
                                : <Button title="Salvar" bgcolor="green" handleClick={() => validInputs('Salvar')} />
                            }
                        </RowGap>
                    </ModalFooter>
                </ModalContainer>
                {openDelete 
                    ? <Delete 
                        close={() => setOpenDelete(false)} 
                        removeProduct={() => deleteProduto(product.id)} 
                    /> 
                    : null
                }
            </motion.div>
        </>
    )
}

export default Modal