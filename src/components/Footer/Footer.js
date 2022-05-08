import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className='FooterContainer'>
            <div className="container-footer">
                <div className="titles">DESCRIPTION</div>
                <div className="titles">LINKS</div>
                <div className="titles">SOCIAL</div>
                <div className="description nWidth">
                    Speedfire Games was founded in 1987 and is the creator of the games Fortnite, 
                    Unreal, Gears of War, Shadow Complex and the Infinity Blade series. Speedfire's Unreal Engine technology 
                    brings high-fidelity, interactive experiences to desktop, console, mobile, AR, VR, and websites. Unreal
                    Engine is available for free at unrealengine.com. To stay up to date with the latest news from the studio, 
                    follow @Speedfire.
                </div>
                <div className="description">
                    <ul className='FooterNavbar'>
                        <li>
                            <Link to='/#'>Home</Link>
                        </li>
                        <li>
                            <Link to='/us/#'>Us</Link>
                        </li>
                        <li>
                            <Link to='/games/all/#'>Games</Link>
                        </li>
                        <li>
                            <Link to='/games/pc/#'>PC Games</Link>
                        </li>
                        <li>
                            <Link to='/games/ps/#'>PS Games</Link>
                        </li>
                        <li>
                            <Link to='/games/xbox/#'>XBOX Games</Link>
                        </li>
                        <li>
                            <Link to='/help/#'>Help</Link>
                        </li>
                    </ul>
                </div>
                <div className="description dflex">
                    <div>
                        <img className='FooterImg' src='../media/instagram.png' alt='instagram' />
                    </div>
                    <div>
                        <img className='FooterImg' src='../media/twitter.png' alt='twitter' />
                    </div>
                    <div>
                        <img className='FooterImg' src='../media/facebook.png' alt='facebook' />
                    </div>
                </div>
            </div>
            <div className='Copyright'>Copyright &copy; 2022 All Rights Reserved by Speedfire Games</div>
        </div>
    )
}

export default Footer