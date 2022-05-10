import './Cart.css'
import { useContext, useEffect } from 'react'
import CartContextProvider from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, addQuantity, reduceQuantity, totalCartPrice, totalPrice, setTotal } = useContext(CartContextProvider)

    useEffect(() => {
        setTotal(totalCartPrice())
    }, [cart])

    if (cart.length === 0) {
        return (
            <div>
                <h2 className='TitleCart'>No added products</h2>
                <div className='AddProductsLink'>
                    <Link to='/games/all' className='LinkGames'>Add products</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className='TitleCart'>Added to cart products</h2>
            <ul className='Products'>
                {
                    cart.map(prod => {
                        return <li key={prod.id} className='Product'>
                                    <img src={prod.img} className='CartImage' alt={prod.description} />
                                    <div className='ProductInfo'>
                                        <h3 className='ProductName'>{prod.description}</h3>
                                        <h3 className='ProductQuantity'>x{prod.count}</h3>
                                    </div>
                                    <div className='QuantityOperators' onClick={() => {reduceQuantity(prod.id)}}>-</div>
                                    <div className='QuantityOperators' onClick={() => {addQuantity(prod.id)}}>+</div>
                                    <h3 className='ProductTotalPrice'>${prod.price} {prod.currency}</h3>
                                    <img src='https://images2.imgbox.com/91/16/0qxeHgQ4_o.png' onClick={() => removeItem(prod.id)} className='DeleteItem' alt='Delete' />
                                </li>
                    })
                }
            </ul>
            <h3 className='FinalCartPrice'>Final price: ${totalPrice} USD</h3>
            <div className='CartButtons'>
                <button className='Clear' onClick={() => clearCart(true)}>Clear cart</button>
                <Link to='/checkout' className='CreateOrder'>Go to checkout</Link>
            </div>
        </div>
    )
}

export default Cart