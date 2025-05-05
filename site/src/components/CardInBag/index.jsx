/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import QuantityComponent from '../QuantityComponent';
import { CardInBagStyled, ImgContainer, TextContainer, QuantityContainer } from './style';
import erroImage from '../../assets/erro.png';

function CardInBag({ id, title, priceAjust, img, defaultQuantity, asideBagList, setAsideBagList, attTotal }) {
    const [quantity, setQuantity] = useState(defaultQuantity);
    const productToUpdate = asideBagList.find((item) => item.id === id)
    const price = priceAjust ? productToUpdate.precoPrazo : productToUpdate.precoVista 

    // Calculando total de todos os produtos
    function calcTotal() {
        let total = 0
        asideBagList.map(product => {
            let localPrice = priceAjust ? product.precoPrazo : product.precoVista
            total += localPrice * product.quantidadeInBag
        })
        return total
    }

    useEffect(() => {
        productToUpdate.quantidadeInBag = quantity

        // Passando total para o componente AsideBag
        attTotal(calcTotal())

        // Tirando item da sacola caso a quantidade for 0
        if(quantity === 0) {
            for(let i = 0; i < asideBagList.length; i++) {
                if(asideBagList[i].quantidadeInBag === 0) {
                    asideBagList.splice(i, 1)
                    setAsideBagList([...asideBagList])
                }
            }
        }  
    }, [quantity, priceAjust])

    return (
        <CardInBagStyled>
            <ImgContainer>
                <img src={img === "" ? erroImage : img} alt={title} />
            </ImgContainer>

            <TextContainer>
                <h2>{title}</h2>
                <span>R$ {(price*quantity).toFixed(2).replace(".", ",")}</span>
            </TextContainer>

            <QuantityContainer>
                <QuantityComponent 
                    width="40px"
                    defaultQuantity={quantity}
                    setDefaultQuantity={setQuantity}
                    // Testando se é possível adicionar mais itens a sacola
                    canIncrement={productToUpdate.estoque > quantity}
                    inputReadOnly={true}
                />
            </QuantityContainer>
        </CardInBagStyled>
    )
}

export default CardInBag;
