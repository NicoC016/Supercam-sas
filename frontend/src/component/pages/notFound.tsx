import React from'react'
import {Link} from "react-router-dom"
import {Navigator} from '../pages/navigator'
import notFound  from '../../assets/img/notFound.png' 
export default function NotFound(){
    return( 
        <div>
            <Navigator/>
            <img src={notFound} alt="notFound" className="logotipo" />
            <h1 className="text-center">No se encontro la ruta accedida</h1>
            <h3 className="text-center">Volver al menu principal</h3>
            <Link  to="/"><button type="button" className="buttonNotFound btn btn-warning ">Volver</button></Link>
            
        </div>
    )
}