import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar = () => {

    const [user] = useAuthState(auth); 

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <div className='navbar'>
            <h1> My Notebook</h1>
            <div className='links'>
        <Link to="/"> HOME </Link>
        {! user ? (<Link to="/login"> LOGIN </Link>) : ( 
        <Link to="/createpost"> Create Post </Link> 
        ) }
            </div>
        <div className='user'>
            {user && (
             <>
            <p> {user?.displayName}</p>
            <img src={user?.photoURL || ""} width="40" height="40" />
            <button onClick={signUserOut}> Log Out </button> 
            </> )}
        </div>
        </div>
    )
}