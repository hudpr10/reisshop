/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import QuantityComponent from '../QuantityComponent';
import { CardInBagStyled, ImgContainer, TextContainer, QuantityContainer } from './style';
import erroImage from '../../assets/erro.png';

function CardInBag({ id, title, price, img, defaultQuantity, asideBagList, setAsideBagList }) {
    const [quantity, setQuantity] = useState(defaultQuantity);
    const [productToUpdate] = useState(asideBagList.find((item) => item.id === id))

    useEffect(() => {
        productToUpdate.quantidadeInBag = quantity
        setAsideBagList([...asideBagList])

        if(quantity === 0) {
            for(let i = 0; i < asideBagList.length; i++) {
                if(asideBagList[i].quantidadeInBag === 0) {
                    asideBagList.splice(i, 1)
                    setAsideBagList([...asideBagList])
                }
            }
        }  
    }, [quantity])

    return (
        <CardInBagStyled>
            <ImgContainer>
                <img src={img === "" ? erroImage : img} alt={title} />
            </ImgContainer>

            <TextContainer>
                <h2>{title}</h2>
                <span>R$ {price.toFixed(2).replace(".", ",")}</span>
            </TextContainer>

            <QuantityContainer>
                <QuantityComponent 
                    width="40px"
                    defaultQuantity={quantity}
                    setDefaultQuantity={setQuantity}
                />
            </QuantityContainer>
        </CardInBagStyled>
    )
}

export default CardInBag;
