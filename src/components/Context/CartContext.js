import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        const isProductInCart = cartProducts.indexOf(product)
        if (isProductInCart == -1){
            setCartProducts(cartProducts => [...cartProducts, product])
        }
        else{
            const copyCart = cartProducts;
            copyCart[isProductInCart].count = copyCart[isProductInCart].count + product.count;
            setCartProducts([copyCart])
        }
    }

    const clear = () => {
        setCartProducts([])
    }

    const removeFromCart = (id) => {
        const productFilter = cartProducts.filter((product) => product.id !== id)
        setCartProducts(productFilter)
    }

    const totalProductsPrice = () => {
        let total = 0;
        cartProducts.forEach(element => {
            total += element.price * element.count
        })
        if (total == 0){
            return 'No hay productos'
        }
        else{
            return 'Total $' + total
        };
    }

    const totalProductsPriceCheckout = () => {
        let total = 0;
        cartProducts.forEach(element => {
            total += element.price * element.count
        })
        if (total == 0){
            return 'No hay productos'
        }
        else{
            return 'Total (' + cartProducts.lenght + ') $' + total
        };
    }

    const increaseOneFromCount = (product) => {
        if (product.count == product.stock){
            return
        }
        else{
            product.count = product.count + 1;
        }
    }

    const removeOneFromCount = (product) => {
        if (product.count == 1){
            removeFromCart(product.id)
        }
        else{
            product.count = product.count -1
        }
    }

    const data = {
        cartProducts,
        setCartProducts,
        clear,
        totalProductsPrice,
        removeFromCart,
        addProductToCart,
        increaseOneFromCount,
        removeOneFromCount,
        totalProductsPriceCheckout
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export { CartContext }