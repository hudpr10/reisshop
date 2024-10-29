import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { MainContainer } from './globalStyles'
import Card from './components/Card'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState({})

  function handleOpen(product) {
    setModalOpen(true)
    setModalProduct(product)
  }

  return (
    <>
      <Header handleModal={(product) => handleOpen(product)} />
      <MainContainer>
        <Card
          key={'futuro id'}
          title="Título do Produto"
          desc="Descrição do Produto"
          img=""
          quant={20}
          prazo={100.00}
          vista={90.00}
          openModal={(product) => handleOpen(product)}
        />
        <Card
          key={'futuro id 2'}
          title="Linha de Pesca"
          desc="Verde"
          img=""
          quant={20}
          prazo={100.00}
          vista={90.00}
          openModal={(product) => handleOpen(product)}
        />
        {modalOpen ? <Modal modalStage={setModalOpen} product={modalProduct} /> : null}
      </MainContainer>
    </>
  )
}

export default App
