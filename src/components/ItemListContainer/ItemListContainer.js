import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from './asyncmock.js'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

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
            {products.length > 0 ? <ItemList products={products} category={categoryID} /> : <NotFound message='That category does not exist' />}
        </div>
    )
}

export default ItemListContainer