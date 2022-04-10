import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='CartContainer'>
            <img className='ImgCart' src='../media/cart.png' alt='cart' />
            <div className='Counter'>0</div>
        </div>
    )
}

export default CartWidget