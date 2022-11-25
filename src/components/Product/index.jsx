import { ProductStyle } from "./style"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = ({ image, name, category, price, Button, objectProduct, setProductsCart, productsCart }) => {

    const addToCart = (objectProduct) => {
        const verifyIfExist = productsCart.some((product) => objectProduct.id == product.id)

        if(verifyIfExist) {
            toast.warn("Você já adicionou esse produto ao carrinho!",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }
            )
        } else {
            setProductsCart([...productsCart, objectProduct])
        }
    }

    return (
        <ProductStyle>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <span>{category}</span>
                <span>R$ {price}</span>
                <Button onClick={() => addToCart(objectProduct)} type="button">Adicionar</Button>
            </div>
        </ProductStyle>
    )
}