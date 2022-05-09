import { createContext, useState } from 'react'
import swal from 'sweetalert'

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    let [cart, addToCart] = useState([])
    let [totalPrice, setTotal] = useState(0)

    const addItemToCart = (productAdd) => {
        let modified = false
        addToCart(cart.map((prod) => {
            if (productAdd.id === prod.id) {
                modified = true
                return {...prod, count: prod.count + productAdd.count}
            }
            else {
                return prod
            }
        }))

        if (!modified) {
            addToCart([...cart, productAdd])
        }
    }

    const clearCart = (notify) => {
        if (notify) {
            swal({
                title: "Are you sure?",
                text: "You are about to delete your cart!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    addToCart([])
                    swal("Cart deleted", {
                        icon: "success",
                        timer: 1000,
                        buttons: false,
                    })
                }
        })
        } else {
            addToCart([])
        }
    }

    const removeItem = (id) => {
        let newCart = cart.filter(prod => prod.id !== id)
        addToCart(newCart)
    }

    const cartQuantity = () => {
        let totalItems = cart.reduce((acc, value) => acc + value.count, 0)
        return totalItems
    }

    const addQuantity = (id) => {
        addToCart(cart.map((prod) => {
            if (prod.id === id) {
                if (prod.count + 1 <= prod.stock) {
                    return {...prod, count: prod.count + 1}
                }
                else {
                    return prod
                }
            } else {
                return prod
            }
        }))
        setTotal(totalCartPrice())
    }

    const reduceQuantity = (id) => {
        let removed = false
        let newCart = cart.map((prod) => {
            if (prod.id === id) {
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
        setTotal(totalCartPrice())
    }

    const totalCartPrice = () => {
        let total
        total = cart.reduce((acc, value) => acc + value.price * value.count, 0)
        total = total.toFixed(2)
        return total
    }

    return (
        <CartContext.Provider value={{cart, addItemToCart, cartQuantity, clearCart, removeItem, addQuantity, reduceQuantity, totalCartPrice, totalPrice, setTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext