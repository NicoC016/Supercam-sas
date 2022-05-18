import React from 'react';
import { Link } from "react-router-dom";
import { Navigator } from './navigator'
import clientes from "../../assets/img/clientes.png"


export class Clientes extends React.Component {
    render() {
        return (
            <div >
                <Navigator />

                <div className="alarma-comunitaria">
                    <div className=" grid-layout row">
                        <div className="col-3">
                            <div className="imagenCliente">
                                <img src={clientes} className=" image-card card-img-top" alt='camara' />
                                <div className="card-body">
                                    <h5 className="card-title"> casino arena maipú</h5>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="imagenCliente">
                                <img src={clientes} alt='camara' className=" image-card card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title"> casino arena maipú</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="imagenCliente">
                                <img src={clientes} alt='camara' className=" image-card card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title"> casino arena maipú</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="imagenCliente">
                                <img src={clientes} alt='camara' className=" image-card card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title"> casino arena maipú</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}