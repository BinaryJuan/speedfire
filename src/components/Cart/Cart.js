import './Cart.css'
import { useContext } from 'react'
import CartContextProvider from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContextProvider)
    console.log(cart)

    const totalCartPrice = () => {
        return cart.reduce((acc, value) => acc + value.finalProductPrice, 0)
    }

    if (cart.length == 0) {
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
                                    <h3 className='ProductTotalPrice'>${prod.finalProductPrice} {prod.currency}</h3>
                                    <img src='https://images2.imgbox.com/91/16/0qxeHgQ4_o.png' onClick={() => removeItem(prod.id)} className='DeleteItem' alt='Delete' />
                                </li>
                    })
                }
            </ul>
            <h3 className='FinalCartPrice'>Final price: ${totalCartPrice()} USD</h3>
            <div className='ClearCart'>
                <button onClick={() => clearCart()}>Clear cart</button>
            </div>
        </div>
    )
}

export default Cart