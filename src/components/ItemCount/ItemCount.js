import {useState} from "react"
import Button from "../Button/Button"
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {
    // Hooks
    const [count, setCount] = useState(initial) // utilizo la desestructuracion - count toma el valor y setCount la funcion que lo modifica

    // Comp. Functions
    const increment = () => {
        if (count < stock) {
            setCount(count + 1) // le paso por parametro el nuevo valor de count
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="ItemContainer">
            <div className="CountContainer">
                <Button label={'-'} func={decrement} type={'dec'} />
                <div>{count}</div>
                <Button label={'+'} func={increment} type={'inc'} />
            </div>
            <Button label={'Add to cart'} type={'AddCart'} func={() => {if (stock > 0 && stock >= count) {onAdd(count)}}} />
        </div>
    )
}

export default ItemCount