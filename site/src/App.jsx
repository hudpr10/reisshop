import { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { MainContainer, ErrorText } from './globalStyles'
import Card from './components/Card'
import axios from 'axios'
import AsideBag from './components/AsideBag'
import NotificationToast from './components/NotificationToast'
import { AnimatePresence } from 'framer-motion'

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

  function calcBagLength() {
    let total = 0

    asideBagList.forEach(item => {
      total += item.quantidadeInBag
    })

    return total
  }

  // Toast
  const [toastObject, setToastObject] = useState({ name: "", open: false })

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
        produtosNaTela={setDadosApi}
        setAsideBagOpen={() => setAsideBagOpen(true)}
        asideBagLength={calcBagLength()}
        setToastObject={setToastObject}
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

            setToastObject={setToastObject}

            openModal={(product) => handleOpenModal(product)}
          />
        })}
        {dadosApi.length === 0 ? <ErrorText>Não foi encontrado nenhum produto!</ErrorText> : null}
      </MainContainer>

      {/* Adicionado animação na Modal */}
      <AnimatePresence>
        {modalOpen && (
          <Modal setModalOpen={setModalOpen} product={modalProduct} />
        )}
      </AnimatePresence>

      {/* Adicionado animação na Sacola */}
      <AnimatePresence>
        {asideBagOpen && (
          <AsideBag setAsideBagOpen={setAsideBagOpen} asideBagList={asideBagList} setAsideBagList={setAsideBagList} />
        )}
      </AnimatePresence>

      {/* Adicionado animação no Toast */}
      <AnimatePresence>
        {toastObject.open && (
          <NotificationToast toastObject={toastObject} setToastObject={setToastObject} setAsideBagOpen={setAsideBagOpen} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
