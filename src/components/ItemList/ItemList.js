import Item from "../Item/Item.js"
import "./ItemList.css"

const ItemList = ({products, filter}) => {

    return (
        <div className="ItemList">
            {products.map(prod => {
                if (prod.category == filter) {
                    return <Item key={prod.id} {...prod} /> 
                }
            })}
        </div>
    )
}

export default ItemList