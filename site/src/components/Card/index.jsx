/* eslint-disable react/prop-types */
import { useState } from 'react'
import erroImage from '../../assets/erro.png'
import pencilIcon from '../../assets/lapis.svg'
import addIcon from '../../assets/mais.svg'
import RoundedButton from '../RoundedButton'
import { CardContainer, LeftSide, RightSide, RoundedButtonsContainerStyled } from './style'

function Card({ id, title, desc, prazo, vista, quant, img, openModal, setAsideBagList, asideBagList }) {
    const [productObject, setProductObject] = useState({
        id: id,
        titulo: title, 
        descricao: desc, 
        foto: img, 
        precoPrazo: prazo, 
        precoVista: vista, 
        estoque: quant,
        quantidadeInBag: 1
    })

    function addOnList() {
        const productInBag = asideBagList.find((item) => item.id === id)
        
        if(productInBag === undefined) {
            productObject.quantidadeInBag = 1
            setProductObject(productObject)

            setAsideBagList([...asideBagList, productObject])
        } else {
            productInBag.quantidadeInBag += 1
            
            setProductObject(productInBag)
            setAsideBagList([...asideBagList])
        }
    }

    return (
        <CardContainer>
            <LeftSide>
                <img src={img === '' ? erroImage : img} alt='Imagem do Produto' />
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </LeftSide>
            <RightSide>
                <RoundedButtonsContainerStyled>
                    <RoundedButton 
                        icon={pencilIcon} 
                        bgcolor="white-text" 
                        handleClick={() => openModal(productObject)} 
                    />
                    <RoundedButton
                        icon={addIcon} 
                        bgcolor="green"
                        handleClick={() => addOnList()}
                    />
                </RoundedButtonsContainerStyled>
                <ul>
                    <li>
                        <h3>estoque</h3>
                        <span>{quant}x</span>
                    </li>
                    <li>
                        <h3>à prazo</h3>
                        <span>R$ {prazo.toFixed(2).replace(".", ",")}</span>
                    </li>
                    <li>
                        <h3>à vista</h3>
                        <span>R$ {vista.toFixed(2).replace(".", ",")}</span>
                    </li>
                </ul>
            </RightSide>
        </CardContainer>
    )
}

export default Card