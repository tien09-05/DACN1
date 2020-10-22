import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    const styleBrand = {
        padding: '10px',
        background: '#71d8e3'
    }
    const styleMenu = {
        background: '#1a3265'
    }
    const styleLink = {
        border: '2px solid #cfb561',
        color: '#cfb561'
    }
    const styleItem = {
        marginLeft: '80px'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark" style={styleMenu}>

                <Link className="navbar-brand" to="/" style={styleBrand}>
                    COLLEGE ONLINE CANTEEN
                </Link>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item" >
                        <Link className="nav-link " to="/" style={styleLink}>Home</Link>
                    </li>
                    <li className="nav-item" style={styleItem}>
                        <Link className="nav-link" to="/contact" style={styleLink}>Contact us</Link>
                    </li>
                    <li className="nav-item" style={styleItem}>
                        <Link className="nav-link" to="/about" style={styleLink}>About us</Link>
                    </li>
                    <li className="nav-item" style={styleItem}>
                        <Link className="nav-link" to="/services" style={styleLink}>Services</Link>
                    </li>
                    <li className="nav-item" style={styleItem}>
                        <Link className="nav-link" to="login" style={styleLink}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;