import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ img, description, id, category, price, currency }) => {
    const [quantity, setQuantity] = useState(0)
    const {addItemToCart} = useContext(CartContext)

    const onAddItem = (count) => {
        setQuantity(count)
        const productIn = {
            id, description, currency, price, count, img, finalProductPrice: price * count
        }
        addItemToCart(productIn)
    }

    return (
        <div className='DetailCard'>
            <div>
                <img src={img} className='DetailImg' />
            </div>
            <div className='DetailTextContainer'>
                <ul>
                    <li className='DetailText'><span className='Title'>Product name: </span>{description}</li>
                    <li className='DetailText'><span className='Title'>Product ID: #</span>{id}</li>
                    <li className='DetailText'><span className='Title'>Category: </span><span className='CategoryColor'>{category.toUpperCase()}</span></li>
                    <li className='DetailText'><span className='Title'>Price: </span>{price}{currency}</li>
                </ul>
                <div className='Flex'>
                    {quantity > 0 ? <Link to='/cart' className='ToCart'>Go to cart</Link> : <ItemCount className='ItemContainer' initial={1} onAdd={onAddItem} stock={20} game={description} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail