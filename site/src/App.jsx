import { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { MainContainer, ErrorText } from './globalStyles'
import Card from './components/Card'
import axios from 'axios'
import AsideBag from './components/AsideBag'

function App() {
  // Modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState({})

  function handleOpenModal(product) {
    setModalOpen(true)
    setModalProduct(product)
  }

  // AsideBag
  const [asideBagOpen, setAsideBagOpen] = useState(false)
  const [asideBagList, setAsideBagList] = useState([])

  // Api
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
        handleModal={(product) => handleOpenModal(product)}
        handleAsideBag={() => setAsideBagOpen(true)}
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

            asideBagList={asideBagList}
            setAsideBagList={setAsideBagList}

            openModal={(product) => handleOpenModal(product)}
          />
        })}
        {dadosApi.length === 0 ? <ErrorText>Não foi encontrado nenhum produto!</ErrorText> : null}
        {modalOpen ? <Modal modalStage={setModalOpen} product={modalProduct} /> : null}
        {asideBagOpen ? <AsideBag asideBagStage={setAsideBagOpen} asideBagList={asideBagList} setAsideBagList={setAsideBagList} /> : null}
      </MainContainer>
    </>
  )
}

export default App
