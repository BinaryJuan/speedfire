import './Checkout.css'
import '../Cart/Cart.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartContextProvider from '../../context/CartContext'
import { useContext } from 'react'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc, doc, connectFirestoreEmulator } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'

const Checkout = (props) => {
    const { cart, clearCart } = useContext(CartContextProvider)
    const [loading, setLoading] = useState(false)
    let [objUser, setUser] = useState()

    const totalCartPrice = () => {
        let total
        total = cart.reduce((acc, value) => acc + value.finalProductPrice, 0)
        return total.toFixed(2)
    }

    const getInputsValue = (e) => {
        let allInputs = document.getElementsByClassName('info')
        let value
        for (let i = 0; i < allInputs.length; i++) {
            value = allInputs[i].value
            setUser(value)
            console.log(objUser)
        }
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'default',
                address: 'example',
                city: 'example',
                state: 'example',
                phone: '123456789',
                payment: 'xxxxxxxxx'
            },
            total: totalCartPrice(),
            date: new Date()
        }

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
                    return (
                        Promise.reject({ name: 'outOfStockError', products: outOfStock})
                    )
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`Order ID is ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return (
            <div>
                <h2>Your order is in process...</h2>
            </div>
        )
    }

    if (cart.length > 0) {
        return (
            <div>
                <div class="wrapper" id='form'>
                    <div class="container">
                        <form action="">
                            <h1>
                                Shipping Details
                            </h1>
                            <div class="name">
                                <div>
                                    <label for="f-name">First name</label>
                                    <input className='info' type="text" name="f-name" onChange={getInputsValue} />
                                </div>
                                <div>
                                    <label for="l-name">Last name</label>
                                    <input className='info' type="text" name="l-name" onChange={getInputsValue} />
                                </div>
                            </div>
                            <div class="street">
                                <label for="address">Address</label>
                                <input className='info' type="text" name="address" onChange={getInputsValue} />
                            </div>
                            <div class="address-info">
                                <div>
                                    <label for="city">City</label>
                                    <input className='info' type="text" name="city" onChange={getInputsValue} />
                                </div>
                                <div>
                                    <label for="state">State</label>
                                    <input className='info' type="text" name="state" onChange={getInputsValue} />
                                </div>
                                <div>
                                    <label for="phone">Phone</label>
                                    <input className='info' type="text" name="phone" onChange={getInputsValue} />
                                </div>
                            </div>
                            <h1>
                                Payment Information
                            </h1>
                            <div class="cc-num">
                                <label for="card-num">Credit Card No.</label>
                                <input type="text" name="card-num" />
                            </div>
                            <div class="cc-info">
                                <div>
                                    <label for="card-num">Exp</label>
                                    <input type="text" name="expire" />
                                </div>
                                <div>
                                    <label for="card-num">CCV</label>
                                    <input type="text" name="security" />
                                </div>
                            </div>
                            <div class="btns">
                                <Link to='/cart' className='ButtonForm'>Back to cart</Link>
                                <Link to='/checkout-success' onClick={() => {clearCart(); createOrder()}} className='ButtonForm'>Purchase</Link>
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
                <div className='AddProductsLink'>
                    <Link to='/games/all' className='LinkGames'>Add products</Link>
                </div>
            </div>
        )
    }


}

export default Checkout