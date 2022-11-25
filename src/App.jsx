import { useState, useEffect } from 'react'
import { Header } from './components/Header/index.jsx'
import { GlobalStyle } from './globalStyle.js'
import { ResetCss } from './resetStyle.js'
import { api } from './services/api.js'
import { ButtonBrandStyle } from './components/ButtonBrand/style.js'
import { Main } from './components/Main/index.jsx'
import { ProductList } from './components/ProductList/index.jsx'
import { Aside } from './components/Aside/index.jsx'
import { ToastContainer } from 'react-toastify'


function App() {

  const [apiData, setApiData] = useState([])

  const [searchCategory, setSearchCategory] = useState("")

  const [productsCart, setProductsCart] = useState([])

  useEffect(() => {

    const requestApi = async () => {
      const getDataApi = await api.get("")
      setApiData(getDataApi.data)
    }

    requestApi()
  }, [])

  const searchFilter = apiData.filter((product) => 
    searchCategory == "" ? (
      product
    ) : (
      product.category.toLowerCase().includes(searchCategory.toLowerCase().trim())
    )
  )

  return (
    <div className="App">
      <ResetCss/>
      <GlobalStyle/>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header setSearchCategory={setSearchCategory} Button={ButtonBrandStyle}/>
      <Main>
        <ProductList setProductsCart={setProductsCart} productsCart={productsCart} Button={ButtonBrandStyle} productsList={searchFilter}/>
        <Aside setProductsCart={setProductsCart} productsCart={productsCart}/>
      </Main>
    </div>
  )
}

export default App
