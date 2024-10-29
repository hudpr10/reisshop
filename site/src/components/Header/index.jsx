/* eslint-disable react/prop-types */
import { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button'
import Input from '../Input'
import { HeaderContainer } from './style'

function Header({ handleModal }) {
    const [modalProduct] = useState({
        title: "", 
        desc: "", 
        img: "", 
        prazo: "", 
        vista: "", 
        quant: 1
    })

    return (
    <HeaderContainer>
        <img src={logo} alt="Logo ReisShop" />
        <Input />
        <Button
            title="Adicionar Produto"
            icon="true"
            bgcolor="green"
            handleClick={() => handleModal(modalProduct)}
        />
    </HeaderContainer>
    )
}

export default Header