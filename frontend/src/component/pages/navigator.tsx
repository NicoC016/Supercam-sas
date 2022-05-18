import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';


import logo from "../../assets/img/logo.png"
import foto1 from "../../assets/img/foto1.png"
import foto2 from "../../assets/img/foto2.png"
import foto3 from "../../assets/img/foto3.png"
import imagen4 from "../../assets/img/imagen4.png"



export class Navigator extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navigator1 container-fluid fixed-top">
                <div className="container-fluid">
                    <Link rel="apple-touch-icon" to="/">
                        <img src={logo} alt="logo" className="navigator-logo"  >
                        </img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" id="nav">
                                    Home

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/nosotros" id="nav">
                                    Empresa
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className=" nav-link" to="/clientes" id="nav">
                                    Clientes
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto" id="nav">
                                    Contacto

                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="lista nav-link dropdown-toggle" id="nav" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/producto" >
                                    Productos
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li ><Link className="dropdown-item" to="/camaras" > Camaras</Link></li>
                                    <li><Link className="dropdown-item" to="/alarmaComunitaria">Alarmas comunitarias</Link></li>
                                    <li><Link className="dropdown-item" to="/controlAcceso">Control de accesos</Link></li>
                                    <li><Link className="dropdown-item" to="/barrioPrivado">Barrios privados</Link></li>
                                </ul>
                            </li>
                            <li className=" login ">
                                <Link className=" nav-link" to="/login" >
                                    Iniciar sesión
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export class Cuerpo extends React.Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide animate__animated animate__zoomIn" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={foto2} className="carrousel w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={foto1} className="carrousel w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto3} className="carrousel w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={imagen4} className="carrousel w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        )
    }
}