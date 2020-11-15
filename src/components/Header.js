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
        color: '#cfb561',
        background: '#1a3265',
        cursor: 'pointer'
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

                        <button className="nav-link" data-toggle="modal" style={styleLink} data-target="#exampleModal">
                            Login
                        </button>
                        <div className="modal fade mt-5" id="exampleModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                                        <button type="button" className="close" data-dismiss="modal" >
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">

                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nhập tài khoản" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu" />
                                            </div>
                                            <div className="text-right">
                                                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;