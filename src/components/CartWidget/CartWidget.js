import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <div className='CartContainer'>
            <Link to='/cart'>
                <img className='ImgCart' src='../media/cart.png' alt='cart' />
            </Link>
            <div className='Counter'>0</div>
        </div>
    )
}

export default CartWidget