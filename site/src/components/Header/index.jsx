/* eslint-disable react/prop-types */
import { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button'
import Input from '../Input'
import { HeaderContainer } from './style'

function Header({ handleModal, produtosNaTela }) {
    const [modalProduct] = useState({
        titulo: "", 
        descricao: "", 
        foto: "", 
        precoPrazo: "", 
        precoVista: "", 
        estoque: 1
    })

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo ReisShop" />
            <Input produtosNaTela={produtosNaTela} />
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