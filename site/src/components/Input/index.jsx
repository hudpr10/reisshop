/* eslint-disable react/prop-types */
import { useState } from 'react'
import searchIcon from '../../assets/lupinha.svg'
import Button from '../Button'
import { InputContainer, HeaderSearch } from './style'
import axios from 'axios'

function Input({ produtosNaTela }) {
    const [inputValue, setInputValue] = useState("")

    async function getNomeProduto(nomeProduto) {
        try {
            const conecta = await axios.get(`http://localhost:5264/Produto/?titulo=${nomeProduto}`)
            produtosNaTela(conecta.data)
            
        } catch (error) {
            console.error(error)
        }
    }

    async function enterFilter(e) {
        if(e.key == 'Enter') {
            getNomeProduto(inputValue)
        } 
    }

    return (
    <HeaderSearch>
        <InputContainer>
            <img src={searchIcon} alt="Icone de Busca" />
            <input 
                type="text" 
                placeholder='Pesquisar...'
                value={inputValue}
                onKeyDown={(e) => enterFilter(e)}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </InputContainer>
        <Button 
            title="Buscar"
            largura="fixa"
            handleClick={() => getNomeProduto(inputValue)}
        />
    </HeaderSearch>
    )
}

export default Input