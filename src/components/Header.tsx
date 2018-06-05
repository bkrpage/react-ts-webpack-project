
import { Link } from 'react-router-dom'
import React = require('react');

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;