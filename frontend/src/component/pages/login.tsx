import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png"

export class Login extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="navigator1 container-fluid fixed-top ">
                        <nav className=" navbar navbar-expand-lg  ">
                            <div className=" container-fluid  ">
                                <Link rel="apple-touch-icon" to="/">
                                    <img src={logo} alt="logo" className="navigator-logo"  >
                                    </img>
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className=" justify-content collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className='p-4 link-dark' to="/" id="nav">
                                                Inicio
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="form-login text-center ">
                    <Link to="/login">
                        <img className="image" src={logo} alt="" />
                    </Link>
                </div>
                <form className="form">

                    <div className=" form-signin input">
                        <label htmlFor="exampleInputEmail1" className="form-label ">Direccion de Email</label>
                        <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 form-signin input">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check ">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
                    </div>
                    <button type="submit" className="btn  ">Iniciar sesión</button>
                </form>
            </div>
        )

    }
}