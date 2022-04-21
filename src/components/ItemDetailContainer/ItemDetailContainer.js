import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail.js'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import Loading from '../Loading/Loading'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ addToCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const { productID } = useParams()

    useEffect(() => {
        getDoc(doc(firestoreDb, 'products', productID)).then(response => {
            const productSingular = { id: response.id, ...response.data() }
            setProduct(productSingular)
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