import Item from '../Item/Item.js'
import './ItemList.css'

const ItemList = ({products, category}) => {
    return (
        <div>
            <h2 className='CategoryTitle'>Games: {category.toUpperCase()}</h2>
            <div className='ItemList'>
                {products.map(prod => {
                    return <Item key={prod.id} {...prod} /> 
                })}
            </div>
        </div>
    )
}

export default ItemList