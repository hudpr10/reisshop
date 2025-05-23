/* eslint-disable react/prop-types */
import { useState } from 'react'
import logo from '../../assets/logo.png'
import bagIcon from '../../assets/bag.svg'
import Button from '../Button'
import HeaderInput from '../HeaderInput'
import RoundedButton from "../RoundedButton"
import { HeaderContainer, ButtonsContainerStyled } from './style'

function Header({ handleModal, produtosNaTela, setAsideBagOpen, asideBagLength, setToastObject }) {
    const [modalProduct] = useState({
        titulo: "", 
        descricao: "", 
        foto: "", 
        precoPrazo: "", 
        precoVista: "", 
        estoque: 1
    })

    function openAsideBag() {
        setAsideBagOpen()
        setToastObject(() => ({name: "", open: false}))
    }

    return (
        <HeaderContainer>
            <img src={logo} alt="Logo ReisShop" />
            <HeaderInput produtosNaTela={produtosNaTela} />

            <ButtonsContainerStyled>
                <Button
                    title="Adicionar Produto"
                    icon="true"
                    bgcolor="green"
                    handleClick={() => handleModal(modalProduct)}
                />
                <RoundedButton
                    icon={bagIcon}
                    bgcolor="white-text"
                    handleClick={() => openAsideBag()}
                    notification={asideBagLength > 0 ? asideBagLength : null} 
                />
            </ButtonsContainerStyled>
        </HeaderContainer>
    )
}

export default Header