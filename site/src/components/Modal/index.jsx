/* eslint-disable react/prop-types */
import Button from "../Button"
import ModalInput from "../ModalInput"
import ModalQuantity from "../ModalQuantity"
import { BlackScreen, CloseButton, ModalContainer, RowGap, ModalFooter } from "./style"
import CloseIcon from '../../assets/fechar.svg'
import { useState } from "react"
import Delete from "../Delete"
import ToggleInput from "../ToggleInput"

function Modal({ modalStage, product }) {
    const [title, setTitle] = useState(product.title)
    const [desc, setDesc] = useState(product.desc)
    const [image, setImage] = useState(product.img)
    const [pricePrazo, setPricePrazo] = useState(product.prazo)
    const [priceVista, setPriceVista] = useState(product.vista)
    const [quant, setQuant] = useState(product.quant)

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
                />
                <ModalInput 
                    title="Descrição" 
                    inputValue={desc} 
                    handleType={(value) => setDesc(value)} 
                    handleBlur={() => null} 
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
                        step="0.01"
                        title="Preço à prazo" 
                        inputValue={pricePrazo} 
                        handleType={(value) => setPricePrazo(value)}
                        handleBlur={() => priceAjust('prazo')}
                        error={pricePrazo <= 0 ? 'O preço não pode ser igual ou menor que 0' : ''}
                    />
                    <ModalInput 
                        type="number"
                        step="0.01"
                        title="Preço à vista" 
                        inputValue={priceVista} 
                        handleType={(value) => setPriceVista(value)}
                        handleBlur={() => priceAjust('vista')}
                        error={priceVista <= 0 ? 'O preço não pode ser igual ou menor que 0' : ''}
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
                        error={quant < 0 ? "O estoque deve ser igual ou maior que 0" : ""}
                    />
                    <RowGap $distance='16px'>
                        {product.title !== "" ? <Button bgcolor="red" title="Apagar" handleClick={() => setOpenDelete(true)} /> : null}
                        <Button title="Cancelar" handleClick={() => modalStage(false)} />
                        <Button 
                            title="Salvar" 
                            bgcolor="green" 
                            handleClick={() => console.log(product)} />
                    </RowGap>
                </ModalFooter>
            </ModalContainer>
            {openDelete ? <Delete close={() => setOpenDelete(false)} removeProduct={() => console.log('removido')} /> : null}
        </>
    )
}

export default Modal