import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import HamNav from '../HamNav/HamNav'
import { Link, NavLink } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getDocs(query(collection(firestoreDb, 'categories'))).then(response => {
            const categories = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return (
        <div>
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
                            { categories.map(cat => <Link key={cat.id} to={`/games/${cat.id}`}
                        >   {(cat.description).toUpperCase()}</Link>)}
                        </div>
                    </div> 
                    <NavLink to='/help' className={({isActive}) => isActive ? 'activeButton' : 'Button'}>Help</NavLink>
                </div>
                <div className='CartNav'>
                    <CartWidget />
                </div>
            </nav>
            <HamNav />
        </div>

    )
}

export default NavBar