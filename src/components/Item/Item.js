import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({img, description, price, currency, id}) => {
    const handleOnAdd = (quantity) => {
        if (quantity > 0) {
            console.log(`Product added: x${quantity} "${description}" at $${price} USD each`)
        }
    }

    return (
        <div className='ProductCard'>
            <picture>
                <img src={img} alt={description} />
            </picture>
            <h2>{description}</h2>
            <h3>{price}{currency}</h3>
            <Link to={`/item/${id}`} className='Detalle'>Ver detalle</Link>
            <ItemCount initial={1} stock={20} onAdd={handleOnAdd} game={description} />
        </div>
    )
}

export default Item