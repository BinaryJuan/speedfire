import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../ItemListContainer/asyncmock.js'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Loading from '../Loading/Loading'

const ItemDetailContainer = ({ addToCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const { productID } = useParams()

    useEffect(() => {
        getProductsById(productID).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productID])


    return (
        <div className='ItemDetailContainer' >
            { 
                loading ? <h2 className='NoProduct'><Loading /></h2> :
                product ? <ItemDetail  {...product} addToCart={addToCart} cart={cart} /> : <NotFound message='Oops! The product does not exist. Sorry.' />
            }
        </div>
    )    
}
export default ItemDetailContainer