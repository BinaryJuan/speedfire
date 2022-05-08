import './HamNav.css'
import { Link } from 'react-router-dom'

const HamNav = () => {
    return (
        <div>
            <div className='hamburger-menu'>
                <input id='menu__toggle' type='checkbox' />
                <label className='menu__btn' htmlFor='menu__toggle'>
                    <span></span>
                </label>
                <ul className='menu__box'>
                    <li>
                        <img src='../media/speedfire.png' className='NavHamImg' alt='logo' /> 
                    </li>
                    <li>
                        <Link className='menu__item' to='/#'>Home</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/us/#'>Us</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/games/all/#'>Games</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/games/pc/#'>PC Games</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/games/ps/#'>PS Games</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/games/xbox/#'>XBOX Games</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/cart/#'>Cart</Link>
                    </li>
                    <li>
                        <Link className='menu__item' to='/help/#'>Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HamNav