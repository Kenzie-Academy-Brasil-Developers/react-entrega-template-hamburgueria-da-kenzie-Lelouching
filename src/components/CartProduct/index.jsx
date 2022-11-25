import { CartProductStyle } from "./style"

export const CartProduct = ({ image, name, category, id, cartProducts, setProductsCart }) => {
    
    const removeFromCart = (id) => {
        const filter = cartProducts.filter((cartProduct) => cartProduct.id !== id)
        setProductsCart(filter)
    }
    
    return (
        <CartProductStyle>
            <div>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <span>{category}</span>
                </div>
            </div>
            <span onClick={() => removeFromCart(id)}>Remover</span>
        </CartProductStyle>
    )
}