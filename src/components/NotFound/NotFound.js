import './NotFound.css'

const NotFound = (props) => {
    return (
        <div>
            <h2 className='NotFound'>{props.message}</h2>
            <img src='../media/notfound.gif' className='ImgNotFound' alt='notfound' />
        </div>
    )
}

export default NotFound