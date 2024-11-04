import { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { MainContainer, ErrorText } from './globalStyles'
import Card from './components/Card'
import axios from 'axios'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState({})

  function handleOpen(product) {
    setModalOpen(true)
    setModalProduct(product)
  }

  const [dadosApi, setDadosApi] = useState([])

  useEffect(() => {
    async function apiConecta() {
      const conecta = await axios.get('http://localhost:5264/TodosProdutos')
      setDadosApi(conecta.data)
    }

    apiConecta()
  }, [])

  return (
    <>
      <Header 
        handleModal={(product) => handleOpen(product)}
        produtosNaTela={setDadosApi}
      />
      <MainContainer>
        {dadosApi.map(cadaItem => {
          return <Card
            key={cadaItem.id}
            id={cadaItem.id}
            title={cadaItem.titulo}
            desc={cadaItem.descricao}
            img={cadaItem.foto}
            quant={cadaItem.estoque}
            prazo={cadaItem.precoPrazo}
            vista={cadaItem.precoVista}
            openModal={(product) => handleOpen(product)}
          />
        })}
        {dadosApi.length === 0 ? <ErrorText>Não foi encontrado nenhum produto!</ErrorText> : null}
        {modalOpen ? <Modal modalStage={setModalOpen} product={modalProduct} /> : null}
      </MainContainer>
    </>
  )
}

export default App
