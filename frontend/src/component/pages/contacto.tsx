import React from 'react';
import { Link } from "react-router-dom";
import { Navigator } from './navigator'
import eslogan from "../../assets/img/eslogan.png"


export class Contacto extends React.Component {
    render() {
        return (
            <div >
                <Navigator />

                <div className="alarma-comunitaria">
                    <div>
                        <img src={eslogan} className="eslogan">

                        </img>

                    </div>
                    <div className=" grid-layout row">

                        <div className="form1">
                            <form action="/POST" className="formularioContacto w3-container w3-card-4  w3-margin">
                                <h2 className="w3-center">Contactanos</h2>
                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: 50 }}><i className="w3-xxlarge fa fa-user"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="first" type="text" placeholder="Nombre" />
                                    </div>
                                </div>

                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: 50 }}><i className="w3-xxlarge fa fa-user"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="last" type="text" placeholder="Apellido" />
                                    </div>
                                </div>

                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: 50 }}><i className="w3-xxlarge fa fa-envelope-o"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="email" type="text" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: 50 }}><i className="w3-xxlarge fa fa-phone"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="phone" type="text" placeholder="Telefono" />
                                    </div>
                                </div>

                                <div className="w3-row w3-section">
                                    <div className="w3-col" style={{ width: 50 }}><i className="w3-xxlarge fa fa-pencil"></i></div>
                                    <div className="w3-rest">
                                        <input className="w3-input w3-border" name="message" type="text" placeholder="Mensaje" />
                                    </div>
                                </div>

                                <button className=" btn w3-button w3-block w3-section w3-ripple w3-padding">Enviar</button>

                            </form>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
}