import './ItemDetail.css'
import Button from '../Button/Button'

const ItemDetail = ({ img, description, id, category, price, currency }) => {
    const onAddSingle = () => {
        console.log(`x1 "${description}" added (price: $${price})`)
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
                <Button type='BuyButton' func={onAddSingle} label='Buy now' />
            </div>
        </div>
    )
}

export default ItemDetail