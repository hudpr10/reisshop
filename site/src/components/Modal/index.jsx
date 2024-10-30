/* eslint-disable react/prop-types */
import Button from "../Button"
import ModalInput from "../ModalInput"
import ModalQuantity from "../ModalQuantity"
import { BlackScreen, CloseButton, ModalContainer, RowGap, ModalFooter } from "./style"
import CloseIcon from '../../assets/fechar.svg'
import { useState } from "react"
import Delete from "../Delete"
import ToggleInput from "../ToggleInput"
import axios from "axios"

function Modal({ modalStage, product }) {
    const [title, setTitle] = useState(product.titulo)
    const [desc, setDesc] = useState(product.descricao)
    const [image, setImage] = useState(product.foto)
    const [pricePrazo, setPricePrazo] = useState(product.precoPrazo)
    const [priceVista, setPriceVista] = useState(product.precoVista)
    const [quant, setQuant] = useState(product.estoque)

    const [openDelete, setOpenDelete] = useState(false);
    const [enablePriceAjust, setEnablePriceAjust] = useState()

    function changeQuant(type) {
        switch(type) {
            case 'Mais':
                setQuant(Number(quant) + 1)
                break
            case 'Menos':
                if(quant <= 0) {
                    break
                } else {
                    setQuant(Number(quant) - 1)
                }
        }
    }

    function priceAjust(input) {
        if(!enablePriceAjust) {
            if(input === "prazo") {
                setPriceVista(Number(pricePrazo) - (pricePrazo * 0.1))
            } else if(input === "vista") {
                setPricePrazo(Number(priceVista) + (priceVista * 0.1))
            }
        }
    }

    async function validInputs() {
        if(title !== "" && desc !== "" && pricePrazo !== "" && priceVista !== "" && quant >= 0 && quant !== "") {
            const produtoNovo = {
                titulo: title,
                descricao: desc,
                foto: image,
                precoPrazo: pricePrazo,
                precoVista: priceVista,
                estoque: quant
            }
            postProduto(produtoNovo)
            modalStage(false)
            window.location.reload()
        } 
    }

    async function postProduto(produto) {
        try {
            const conecta = await axios.post('http://localhost:5264/Novo', produto)
            console.log("Resposta da API: ", conecta.data)
        } catch (error) {
            console.error("Erro ao enviar dados: ", error)
        }
    }

    async function deleteProduto(id) {
        try {
            const conecta = await axios.delete(`http://localhost:5264/${id}`)
            console.log("Resposta da API: ", conecta.data)
            window.location.reload()
        } catch (error) {
            console.error("Erro ao deletar produto: ", error)
        }
    }

    return (
        <>
            <BlackScreen />  
            <ModalContainer>
                <CloseButton 
                    onClick={() => modalStage(false)}
                >
                    <img src={CloseIcon} alt="Fechar" />
                </CloseButton>
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
                    <ModalQuantity 
                        inputValue={quant} 
                        handleType={(value) => setQuant(value)}
                        handleQuant={(alt) => changeQuant(alt)}
                        error={quant < 0 || quant === "" ? "O estoque deve ser igual ou maior que 0" : ""}
                    />
                    <RowGap $distance='16px'>
                        {product.title !== "" ? <Button bgcolor="red" title="Apagar" handleClick={() => setOpenDelete(true)} /> : null}
                        <Button title="Cancelar" handleClick={() => modalStage(false)} />
                        <Button 
                            title="Salvar" 
                            bgcolor="green" 
                            handleClick={() => validInputs()} />
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
        </>
    )
}

export default Modal