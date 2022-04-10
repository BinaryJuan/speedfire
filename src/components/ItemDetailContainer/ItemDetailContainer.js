import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../ItemListContainer/asyncmock.js'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
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
                loading ? <h2 className='NoProduct'>Loading...</h2> :
                product ? <ItemDetail  {...product} /> : <h2 className='NoProduct'>Oops! The product doesn't exist. Sorry.</h2> 
            }
        </div>
    )    
}
export default ItemDetailContainer