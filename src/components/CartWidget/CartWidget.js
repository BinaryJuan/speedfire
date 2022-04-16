import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)

    return (
        <div className='CartContainer'>
            <Link to='/cart'>
                <img className='ImgCart' src='../media/cart.png' alt='cart' />
            </Link>
            <div className='Counter'>{cartQuantity()}</div>
        </div>
    )
}

export default CartWidget