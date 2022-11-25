import { ProductListStyle } from "./style"
import { Product } from "../Product"

export const ProductList = ({ productsList, Button, setProductsCart, productsCart }) => {
    return (
        <ProductListStyle>
            {
                productsList.map((product, index) => {
                    return <Product productsCart={productsCart} setProductsCart={setProductsCart} objectProduct={product} key={index} name={product.name} category={product.category} image={product.img} price={product.price.toFixed(2)} Button={Button}/>
                })
            }
        </ProductListStyle>
    )
}