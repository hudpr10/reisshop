/* eslint-disable react/prop-types */
import { useState } from 'react'
import erroImage from '../../assets/erro.png'
import pencilIcon from '../../assets/lapis.svg'
import RoundedButton from '../RoundedButton'
import { CardContainer, LeftSide, RightSide } from './style'

function Card({ id, title, desc, prazo, vista, quant, img, openModal}) {
    const [modalProduct] = useState({
        id: id,
        titulo: title, 
        descricao: desc, 
        foto: img, 
        precoPrazo: prazo, 
        precoVista: vista, 
        estoque: quant
    })

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
                <div>
                    <RoundedButton icon={pencilIcon} bgcolor="white-text" handleClick={() => openModal(modalProduct)} />
                </div>
                <ul>
                    <li>
                        <h3>estoque</h3>
                        <span>{quant}x</span>
                    </li>
                    <li>
                        <h3>à prazo</h3>
                        <span>R$ {prazo}</span>
                    </li>
                    <li>
                        <h3>à vista</h3>
                        <span>R$ {vista}</span>
                    </li>
                </ul>
            </RightSide>
        </CardContainer>
    )
}

export default Card