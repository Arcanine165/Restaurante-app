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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<StaticInformation/>}>
        <Route path='/' element = {<Inicio/>}/>
        <Route path='/reservaciones' element = {<Reservaciones/>}>
        
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);


