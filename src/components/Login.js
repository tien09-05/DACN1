import React from 'react';
import { useHistory } from "react-router-dom";
const styleBackground = {
    backgroundImage: "url('../img/bglogin.jpg')",
    backgroundSize: 'cover',
    height: '92.9vh'
}
const setTop = {
    top: '200px',
}
function Login(props) {
    let history = useHistory();
    const clickBtn = e => {
        e.preventDefault();
        history.push('/admin');
    }
    return (
        <div style={styleBackground}>
            <div className="modal-dialog m-auto">
                <div className="modal-content" style={setTop}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Đăng nhập</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nhập tài khoản" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary" onClick={clickBtn}>Đăng nhập</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;