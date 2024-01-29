import { NavLink } from 'react-router-dom'

export default function Header() {
    
    return (
        <header >
        
            <nav style={{textAlign: 'left'}}>
                <NavLink to='/'>Home Page</NavLink> <br />
                <NavLink to='/plans'>Building Plans</NavLink><br />
                <NavLink to='/authors'>Woodworkers</NavLink>
            </nav>
        </header>
    )
}

