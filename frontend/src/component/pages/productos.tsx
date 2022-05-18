import React from 'react';
import { Link } from "react-router-dom";
import { Navigator } from './navigator';


import camaraDomoIpExterior from '../../assets/img/camaraDomoIpExterior.jpg'


export class Productos extends React.Component {
    render() {
        return (
            <div >
                <Navigator></Navigator>
                <div className="alarma-comunitaria">
                    <div className=" grid-layout row">
                        <div className="col-4">
                            <div className="card2">
                                <img src={camaraDomoIpExterior} className=" image-card card-img-top" alt='camara'/>
                                <div className="card-body">
                                    <h5 className="card-title"> Camara ip</h5>
                                    <p className="card-text">Descripcion de la misma.</p>
                                    <Link to="/" className="btn btn-primary">Saber mas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card2">
                                <img src={camaraDomoIpExterior}alt='camara' className=" image-card card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Camara ip</h5>
                                    <p className="card-text">Descripcion de la misma.</p>
                                    <Link to="/" className="btn btn-primary">Saber mas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card2">
                                <img src={camaraDomoIpExterior} alt='camara' className=" image-card card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Camara ip</h5>
                                    <p className="card-text">Descripcion de la misma.</p>
                                    <Link to="/" className="btn btn-primary">Saber mas</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card2">
                                <img src={camaraDomoIpExterior} alt='camara' className=" image-card card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Camara ip</h5>
                                    <p className="card-text">Descripcion de la misma.</p>
                                    <Link to="/" className="btn btn-primary">Saber mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}