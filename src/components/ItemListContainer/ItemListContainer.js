import './ItemListContainer.css'

const ItemListContainer = (props) => {
    console.log(props.greeting)
    return (
        <div>
            <h1 className='Greetings'>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer