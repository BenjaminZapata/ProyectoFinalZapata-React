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
            total += element.price
        })
        if (total == 0){
            return 'No hay productos'
        }
        else{
            return 'Total $' + total
        };
    }

    const increaseOneFromCount = (id) => {

    }

    const removeOneFromCount = (id) => {
        /*const index = id + 1
        const copyCart = cartProducts
        if (copyCart[index].count == 1){
            removeFromCart(index)
        }
        else{
            copyCart[index].count = copyCart[index].count - 1
            setCartProducts(copyCart)
        }*/
    }

    const data = {
        cartProducts,
        setCartProducts,
        clear,
        totalProductsPrice,
        removeFromCart,
        addProductToCart,
        increaseOneFromCount,
        removeOneFromCount
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export { CartContext }