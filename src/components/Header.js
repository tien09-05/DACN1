import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

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
function Header(props) {
    //  dang ky
    const [signUp, setSignup] = useState({
        nameSignUp: '',
        passwordSignUp: '',
    });
    const handleInputSignUpChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setSignup({
            ...signUp,
            [name]: value
        });
    }
    const handleSummitSignUp = async (e) => {
        e.preventDefault();
        let { nameSignUp: name, passwordSignUp: password } = signUp;
        console.log(name, password);
        const response = await axios.post('/user', { name, password });
        alert("dang ky thanh cong");

        console.log(response);
        setSignup({
            nameSignUp: '',
            passwordSignUp: ''
        })
    }


    // dang nhap

    const [login, setLogin] = useState({
        nameLogin: '',
        passwordLogin: '',
    });
    const [isLogin, setIsLogin] = useState(false);
    const handleInputLoginChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setLogin({
            ...login,
            [name]: value
        });
    }
    const handleSummitLogin = async (e) => {
        e.preventDefault();

        const response = await axios.get('/user');
        let indexName = response.data.findIndex(item => item.name === login.nameLogin);
        let indexPassword = response.data.findIndex(item => item.password === login.passwordLogin);

        if (indexName > -1 && indexPassword > -1) {
            alert("dang nhap thanh cong");
            setIsLogin(true);
            console.log(document.getElementsByClassName("modal-backdrop fade show")[0].classList.add("d-none"));
        } else {
            alert("sai tai khoan hoac mat khau");

        }
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
                        <Link className="nav-link " to="/admin" style={styleLink}>Admin</Link>
                    </li>
                    {isLogin ? "" : <div className="modal fade mt-5" id="exampleModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                                    <button type="button" className="close" data-dismiss="modal" >
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSummitLogin}>
                                        <div className="form-group">

                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Nhập tài khoản" onChange={handleInputLoginChange} name="nameLogin" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu" onChange={handleInputLoginChange} name="passwordLogin" />
                                        </div>
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Đăng nhập</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>}

                    <li className="nav-item" style={styleItem}>
                        <button className="nav-link" data-toggle="modal" style={styleLink} data-target="#exampleModal">
                            {isLogin ? "ĐĂNG XUÁT" : "ĐĂNG NHẬP"}
                        </button>

                    </li>
                    <li className="nav-item" style={styleItem}>

                        <button className="nav-link" data-toggle="modal" style={styleLink} data-target="#exampleModal2">
                            ĐĂNG ký
                        </button>
                        <div className="modal fade mt-5" id="exampleModal2">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Đăng Ký</h5>
                                        <button type="button" className="close" data-dismiss="modal" >
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSummitSignUp}>
                                            <div className="form-group">

                                                <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Nhập tài khoản" name="nameSignUp" onChange={handleInputSignUpChange} value={signUp.nameSignUp} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Nhập mật khẩu" name="passwordSignUp" onChange={handleInputSignUpChange} value={signUp.passwordSignUp} />
                                            </div>
                                            <div className="text-right">
                                                <button type="submit" className="btn btn-primary">Đăng Ký</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </li>
                    {isLogin ? <li className="nav-item mr-auto" style={styleItem}>
                        <h4 className="text-white">HELLO {login.nameLogin}</h4>
                    </li> : ""}


                </ul>
            </nav>
        </div>
    );
}

export default Header;