import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import notifyAdd from '../Notification/Notification'

const Item = ({img, description, price, currency, id}) => {
    const {addItemToCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    const onAddItem = (count) => {
        setQuantity(count)
        const productIn = {
            id, description, currency, price, count, img, stock: 20
        }
        addItemToCart(productIn)
        notifyAdd(description)
    }

    return (
        <div className='ProductCard'>
            <picture>
                <img src={img} alt={description} />
            </picture>
            <h2>{description}</h2>
            <h3>{price}{currency}</h3>
            <Link to={`/item/${id}`} className='Detalle'>See details</Link>
            <ItemCount initial={1} stock={20} onAdd={onAddItem} game={description} />
        </div>
    )
}

export default Item