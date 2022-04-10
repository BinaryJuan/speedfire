import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from './asyncmock.js'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryID } = useParams()

    useEffect(() => {
        getProducts(categoryID).then(prod => {
            setProducts(prod)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryID])

    return (
        <div id={props.id} className='ItemListContainer'>
            <ItemList products={products} category={categoryID} />
        </div>
    )
}

export default ItemListContainer