/* eslint-disable react/prop-types */
import { useState } from 'react';
import QuantityComponent from '../QuantityComponent';
import { CardInBagStyled, ImgContainer, TextContainer, QuantityContainer } from './style';

function CardInBag({ title, price, img, defaultQuantity}) {
    const [quantity, setQuantity] = useState(defaultQuantity);

    return (
        <CardInBagStyled>
            <ImgContainer>
                <img src={img} alt={title} />
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
