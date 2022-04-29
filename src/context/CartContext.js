import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    let [cart, addToCart] = useState([])

    const addItemToCart = (productAdd) => {
        let modified = false
        cart = cart.map((prod) => {
            if (productAdd.id == prod.id) {
                modified = true
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

    const addQuantity = (id) => {
        let newCart = cart.map((prod) => {
            if (prod.id == id) {
                if (prod.count + 1 <= prod.stock) {
                    return {...prod, count: prod.count + 1}
                }
                else {
                    return prod
                }
            } else {
                return prod
            }
        })
        addToCart(newCart)
    }

    const reduceQuantity = (id) => {
        let removed = false
        let newCart = cart.map((prod) => {
            if (prod.id == id) {
                if (prod.count - 1 === 0) {
                    removeItem(prod.id)
                    removed = true
                } else {
                    return {...prod, count: prod.count - 1}
                }
            } else {
                return prod
            }
        })
        if (!removed) {
            addToCart(newCart)
        }
    }

    return (
        <CartContext.Provider value={{cart, addItemToCart, cartQuantity, clearCart, removeItem, addQuantity, reduceQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext