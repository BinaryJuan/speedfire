import { useState, useEffect } from "react"
import { getProducts } from "./asyncmock.js"
import ItemList from "../ItemList/ItemList.js"
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(prod => {
            setProducts(prod)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div id={props.id} className="ItemListContainer">
            <h2 className="CategoryTitle">{props.greeting}</h2>
            <ItemList products={products} filter={props.filter} />
        </div>
    )
}

export default ItemListContainer