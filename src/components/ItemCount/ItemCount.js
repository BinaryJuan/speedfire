import {useState} from 'react'
import Button from '../Button/Button'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd, game}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='ItemContainer'>
            <div className='CountContainer'>
                <Button label={'-'} func={decrement} type={'dec'} />
                <div>{count}</div>
                <Button label={'+'} func={increment} type={'inc'} />
            </div>
            <Button label={'Add to cart'} type={'AddCart'} func={() => {if (stock > 1 && stock >= count) {onAdd(count, game); setCount(initial)}}} />
        </div>
    )
}

export default ItemCount