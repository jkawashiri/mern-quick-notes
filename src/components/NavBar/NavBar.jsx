import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (
        <nav>
            &nbsp;&nbsp;<span className="welcome">Welcome, {user.name}</span>
            &nbsp;&nbsp;<button><Link className="logout" onClick={ handleLogOut }>Log Out</Link></button>
        </nav>
    )
}