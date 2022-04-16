import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    let [cart, addToCart] = useState([])
    console.log(cart)

    const addItemToCart = (productAdd) => {
        let modified = false
        cart = cart.map((prod) => {
            if (productAdd.id == prod.id) {
                modified = true
                console.log('modifique')
                return {...prod, count: prod.count + productAdd.count}
            }
            else {
                return prod
            }
        })

        if (!modified) {
            addToCart([...cart, productAdd])
        }
    }

    const clearCart = () => {
        addToCart([])
    }

    const removeItem = (id) => {
        let newCart = cart.filter(prod => prod.id != id)
        addToCart(newCart)
    }

    const cartQuantity = () => {
        let totalItems = cart.length
        return totalItems
    }

    return (
        <CartContext.Provider value={{cart, addItemToCart, cartQuantity, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext