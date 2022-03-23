import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <img className='ImgLogo' src='media/speedfire.png' alt='logo'/>
            <button className='Button'>Home</button>
            <div className="dropdown">
                <button className="dropbtn Button">Games</button>
                <div className="dropdown-content">
                    <a href="#">PC</a>
                    <a href="#">Playstation</a>
                    <a href="#">Xbox</a>
                </div>
            </div> 
            <button className='Button'>Us</button>
            <button className='Button'>Contact</button>
            <button className='Login'>Log in</button>
        </nav>
    )
}

export default NavBar