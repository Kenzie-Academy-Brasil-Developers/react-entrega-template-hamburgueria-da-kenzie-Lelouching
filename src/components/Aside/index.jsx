import { Cart } from "../Cart"
import { CartTotal } from "../CartTotal"
import { AsideStyle } from "./style"

export const Aside = ({ productsCart, setProductsCart }) => {
    return (
        <AsideStyle>
            <div>
                <span>Carrinho de compras</span>
            </div>
            {
                productsCart.length == 0 ? (
                    <div>
                        <h3>Sua sacola está vazia</h3>
                        <span>Adicione itens</span>
                    </div>
                ) : (
                    <Cart setProductsCart={setProductsCart} cartProducts={productsCart}/>
                )

            }
            {
                productsCart.length !== 0 ? (
                    <CartTotal productsCart={productsCart} setProductsCart={setProductsCart}/>
                ) : (
                    false
                )
            }
        </AsideStyle>
    )
}