import { CartProduct } from "../CartProduct"
import { CartStyle } from "./style"

export const Cart = ({ cartProducts, setProductsCart }) => {
    return (
        <CartStyle>
            {
                cartProducts.map((cartProduct, index) => {
                    return <CartProduct setProductsCart={setProductsCart} cartProducts={cartProducts} key={index} image={cartProduct.img} name={cartProduct.name} category={cartProduct.category} id={cartProduct.id}/>
                })
            }
        </CartStyle>
    )
}