import { useState } from "react"
import { cartContext } from "./cartContext"

function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const isDuplicated = item => cart.some(prod => prod.name == item.name)

    const addToCart = item => {

        if (isDuplicated(item)) {
            const updatedCart = cart.map((product) => {
              if (product.id === item.id) {
                return { ...product, qty: product.qty + item.qty }
              }
              return product
            })
            setCart(updatedCart)
          } else {
            setCart([...cart, item])
          }

    }

    const getTotal = () => {
        const pricesOnly = cart.map(prod => prod.price*prod.qty)
        const total = pricesOnly.reduce((acc, current) => acc + current, 0)

        return total
    }

    const emptyCart = () => setCart([])

    const deleteProductFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId))
    }

    const getQty = () => cart.reduce((total, product) => total + product.qty, 0)

    return (
        <cartContext.Provider value={{ cart, addToCart, getTotal, emptyCart, deleteProductFromCart, getQty}}>
            {children}
        </cartContext.Provider>
    )

}

export default CartProvider