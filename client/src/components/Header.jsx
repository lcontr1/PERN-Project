import { NavLink } from 'react-router-dom'

export default function Header() {
    
    return (
        <header>
            <nav>
                <NavLink to='/'>Home Page</NavLink>
                <NavLink to='/plans'>Building Plans</NavLink>
                <NavLink to='/authors'>Woodworkers</NavLink>
            </nav>
        </header>
    )
}

