import React from 'react';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"


//pages

import  {Navigator} from "./component/pages/navigator"
import {Cuerpo} from "./component/pages/navigator"
import { AlarmaComunitaria } from "./component/pages/products/alarmaComunitaria"
import { Barrioprivado } from "./component/pages/products/barrioPrivado"
import { ControlAcceso } from "./component/pages/products/controlDeAcceso"
import { Clientes } from "./component/pages/clientes"
import { Contacto } from "./component/pages/contacto"
import { Productos } from "./component/pages/productos"
import { Nosotros } from "./component/pages/empresa"
import NotFound from "./component/pages/notFound"
import {Login }  from "./component/pages/login"
import {Tareas} from "./component/pages/tareas"






class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Navigator/>
        <Cuerpo/>
      </div>
    )
  }
}
function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/barrioPrivado" element={<Barrioprivado />} />
        <Route path="/controlAcceso" element={<ControlAcceso />} />
        <Route path="/alarmaComunitaria" element={<AlarmaComunitaria />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/camaras" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tarea" element={<Tareas />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
