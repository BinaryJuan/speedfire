import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <img className='ImgLogo' src='media/speedfire.png' alt='logo'/>
            <button>Home</button>
            <div className="dropdown">
                <button className="dropbtn">Games</button>
                <div className="dropdown-content">
                    <a href="#">PC</a>
                    <a href="#">Playstation</a>
                    <a href="#">Xbox</a>
                </div>
            </div> 
            <button>Us</button>
            <button>Contact</button>
        </nav>
    )
}

export default NavBar