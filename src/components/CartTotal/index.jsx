import { CartTotalStyle } from "./style"

export const CartTotal = ({ productsCart, setProductsCart }) => {

    const clearCart = () => {
        setProductsCart([])
    }

    const totalValueCart = productsCart.reduce((a, b) => { return a + b.price }, 0)

    return (
        <CartTotalStyle>
            <div>
                <h4>Total</h4>
                <span>R$ {totalValueCart.toFixed(2)}</span>
            </div>
            <button onClick={clearCart}>Remover todos</button>
        </CartTotalStyle>
    )
}