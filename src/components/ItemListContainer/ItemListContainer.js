import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryID } = useParams()

    useEffect(() => {

        const collectionRef = categoryID != 'all' ? query(collection(firestoreDb, 'products'), where('category', '==', categoryID)) : collection(firestoreDb, 'products')
    
        getDocs(collectionRef).then(response => {
            const productsFire = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(productsFire)
        })
    }, [categoryID])

    return (
        <div id={props.id} className='ItemListContainer'>
            {products.length > 0 ? <ItemList products={products} category={categoryID} /> : <NotFound message='That category does not exist' />}
        </div>
    )
}

export default ItemListContainer