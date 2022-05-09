import './Checkout.css'
import '../Cart/Cart.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { notifyStock, notifyOrder } from '../Notification/Notification'
import CartContextProvider from '../../context/CartContext'
import { useContext } from 'react'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
import swal from 'sweetalert'
import Loading from '../Loading/Loading'

const Checkout = () => {
    const { cart, totalCartPrice, clearCart } = useContext(CartContextProvider)
    const [loading, setLoading] = useState(false)
    let [objOrder, setUser] = useState({
        items: cart,
        buyer: {
            
        },
        total: totalCartPrice(),
        date: new Date()
    })

    const handleOnChange = (e) => {
        e.preventDefault()
        setUser({...objOrder, buyer: {...objOrder.buyer, [e.target.name]: e.target.value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createOrder()
        clearCart(false)
    }

    const createOrder = () => {
        setLoading(true)

        const ids = cart.map(prod => prod.id)
        const batch = writeBatch(firestoreDb)
        const collectionRef = collection(firestoreDb, 'products')
        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.count
                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    notifyStock()
                    return (
                        Promise.reject({ name: 'outOfStockError', products: outOfStock})
                    )
                }
            }).then(({ id }) => {
                batch.commit()
                notifyOrder()
                console.log(`Order ID is ${id}`)
                swal({
                    title: "Success!",
                    text: `Your order ID is: ${id}`,
                    icon: "success",
                    buttons: true,
                })
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    if (cart.length > 0) {
        return (
            <div>
                <div className="wrapper" id='form'>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <h2>
                                Shipping Details
                            </h2>
                            <div className="name">
                                <div>
                                    <label className='label-checkout'>First name</label>
                                    <input className='info inputShake' pattern='[A-Za-z]*' type="text" name="f-name" maxLength="20" onChange={handleOnChange} autoFocus />
                                </div>
                                <div>
                                    <label className='label-checkout'>Last name</label>
                                    <input className='info inputShake' pattern='[A-Za-z]*' type="text" name="l-name" maxLength="20" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="street">
                                <label className='label-checkout'>Address</label>
                                <input className='info inputShake' type="text" name="address" maxLength="50" onChange={handleOnChange} required />
                                <label className='label-checkout'>Email</label>
                                <input className='info inputShake' type="email" name="email" maxLength="50" onChange={handleOnChange} required />
                            </div>
                            <div className="address-info">
                                <div>
                                    <label className='label-checkout'>City</label>
                                    <input className='info inputShake' pattern='[A-Za-z]*' type="text" name="city" maxLength="30" onChange={handleOnChange} />
                                </div>
                                <div>
                                    <label className='label-checkout'>State</label>
                                    <input className='info inputShake' pattern='[A-Za-z]*' type="text" name="state" maxLength="30" onChange={handleOnChange} />
                                </div>
                                <div>
                                    <label className='label-checkout'>Phone</label>
                                    <input className='info inputShake' pattern='[0-9]*' type="number" name="phone" minLength="4" maxLength="15" onChange={handleOnChange} />
                                </div>
                            </div>
                            <h2>
                                Payment Information
                            </h2>
                            <div className="cc-num">
                                <label className='label-checkout'>Credit Card No.</label>
                                <input type="text" name="card-num" />
                            </div>
                            <div className="cc-info">
                                <div>
                                    <label className='label-checkout'>Exp</label>
                                    <input type="text" name="expire" />
                                </div>
                                <div>
                                    <label className='label-checkout'>CCV</label>
                                    <input type="text" name="security" />
                                </div>
                            </div>
                            <div className="btns">
                                <Link to='/cart' className='ButtonForm'>Back to cart</Link>
                                <button type='submit' className='ButtonForm'>Purchase</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className='Error'>Error: there are no products added to the cart</h2>
                <div className='AddProductsLink AddGames'>
                    <Link to='/games/all' className='LinkGames'>Add products</Link>
                </div>
            </div>
        )
    }
}

export default Checkout