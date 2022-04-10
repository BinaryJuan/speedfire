import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <img className='ImgLogo' src='../media/speedfire.png' alt='logo'/>
            </Link>
            <div className='ButtonsContainer'>
                <NavLink to='/' className={({isActive}) => isActive ? 'activeButton' : 'Button'}>Home</NavLink>
                <NavLink to='/us' className={({isActive}) => isActive ? 'activeButton' : 'Button'}>Us</NavLink>
                <div className='dropdown'>
                    <NavLink to='/games/all' className={({isActive}) => isActive ? 'activeButton dropbtn' : 'Button dropbtn'}>Games</NavLink>
                    <div className='dropdown-content'>
                        <Link to='/games/pc'>PC</Link>
                        <Link to='/games/ps'>PlayStation</Link>
                        <Link to='/games/xbox'>Xbox</Link>
                    </div>
                </div> 
                <NavLink to='/contact' className={({isActive}) => isActive ? 'activeButton' : 'Button'}>Contact</NavLink>
            </div>
            <div className='FlexLog'>
                <button className='Login'>Log in</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar