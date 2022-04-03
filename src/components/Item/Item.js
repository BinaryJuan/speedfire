import ItemCount from "../ItemCount/ItemCount"
import Button from "../Button/Button"
import "./Item.css"

const Item = ({img, description, price, currency}) => {
    const handleOnAdd = (quantity, game) => {
        if (quantity > 0) {
            console.log(`Product added: x${quantity} "${description}" at $${price} USD each`)
        }
    }

    return (
        <div className="ProductCard">
            <picture>
                <img src={img} alt={description} />
            </picture>
            <h2>{description}</h2>
            <h3>{price}{currency}</h3>
            <Button type={'Detalle'} label={'Ver detalle'} />
            <ItemCount initial={1} stock={20} onAdd={handleOnAdd} game={description} />
        </div>
    )
}

export default Item