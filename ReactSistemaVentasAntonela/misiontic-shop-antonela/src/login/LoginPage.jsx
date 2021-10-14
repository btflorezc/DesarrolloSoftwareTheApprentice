import React, { Fragment, useState } from 'react';
import '../login/loginStyles.css';
import TortaCompleta from '../login/assets/img/TortaCompleta.jpg';
import logo from '../login/assets/img/Logo.png';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Fragment>
            <div className="login-design">
                <div className="pastel">
                   <img src={TortaCompleta} alt="" width="2000" height="550" />
                </div>
                <div className="login">
                    <div className="login-data">
                        <img src={logo} alt="" width="300" height="250"/>
                        <h2>Acceder con Gmail</h2>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(data) => setEmail(data.target.value)} />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(data) => setPassword(data.target.value)} />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button className="btn-login">Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginPage;
