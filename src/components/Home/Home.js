import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='HomeContainer'>
            <img src='https://i1.wp.com/www.silviagaliana.com/wp-content/uploads/2013/01/Portada-para-Facebook-Invaders.jpg' alt='cover' />
            <div className='containerGrid'>
                <div className="gridElement"><Link to='/games/all' className="btn btn-sm animated-button victoria-one">All games</Link></div>
                <div className="gridElement"><Link to='/games/pc' className="btn btn-sm animated-button victoria-one">PC games</Link></div>
                <div className="gridElement"><Link to='/games/ps' className="btn btn-sm animated-button victoria-one">PS games</Link></div>
                <div className="gridElement"><Link to='/games/xbox' className="btn btn-sm animated-button victoria-one">XBOX games</Link></div>
            </div>
        </div>
    )
}

export default Home