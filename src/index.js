import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/styles.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { StaticInformation } from './components/StaticInformation';
import { Reservaciones } from './components/Reservaciones';
import { Inicio } from './components/Inicio';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './components/Menu';
import { BuscarReservacion } from './components/BuscarReservacion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<StaticInformation/>}>
        <Route path='/' element = {<Inicio/>}/>
        <Route path='/reservaciones' element = {<Reservaciones/>}/>
        <Route path='/buscarReservacion' element = {<BuscarReservacion/>}/>
        <Route path='/menu' element ={<Menu/>}/>
        <Route path='/nosotros' element ={<Inicio/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);


