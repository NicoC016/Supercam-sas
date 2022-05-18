import React from 'react';
import { Navigator } from './navigator';

import imagen7 from "../../assets/img/imagen7.jpg"
import imagen8 from "../../assets/img/imagen8.jpg"


export class Nosotros extends React.Component {
    render() {
        return (
            <div >  
                <Navigator></Navigator>
                <div className="infoCompleta">
                    <div className=" grid-layout row">
                        <img src={imagen7} alt="" className="imagenInfo" />
                        <div className="carousel-caption">
                            <h2 className="infoImagen"> Tu seguridad nos importa</h2>
                        </div>

                    </div>
                    <div className="informacion">
                        <img src={imagen8} alt="" className=" justify-content-start" />
                        <h2 className="mision ">Nuestra Misión</h2>
                        <h5 className="mision p-10">
                            Nos encargamos de la seguridad para que tengas una vida tranquila, mejorando cada dia la calidad de nuestros servicios
                        </h5>

                    </div>

                    <div>

                    </div>


                    <div className="informacion">
                        <h1 className="text-center">Perfil de la empresa </h1>
                        <br />
                        <h5 className="informacionEmpresa ">
                            Somos una empresa con amplia experiencia en seguridad electrónica. Con presencia en el mercado desde el año 2003.
                            Brindamos servicios especializados y personalizados de alto valor agregado a empresas, entes gubernamentales y particulares en el ámbito de todo Cuyo.
                            Nos especializamos en instalaciones en barrios privados y grandes extensiones.
                        </h5>
                    </div>
                </div>
            </div>

        )
    }
}