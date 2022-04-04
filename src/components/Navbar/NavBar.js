import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <img className='ImgLogo' src='media/speedfire.png' alt='logo'/>
            <div className='ButtonsContainer'>
                <button className='Button'>Home</button>
                <button className='Button'>Us</button>
                <div className="dropdown">
                    <button className="dropbtn Button">Games</button>
                    <div className="dropdown-content">
                        <a href="#GamesPC">PC</a>
                        <a href="#GamesPS">Playstation</a>
                        <a href="#GamesXBOX">Xbox</a>
                    </div>
                </div> 
                <button className='Button'>Contact</button>
            </div>
            <div className='FlexLog'>
                <button className='Login'>Log in</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar