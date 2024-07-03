//Elementos necesarios para renderizar la aplicacion
import React from "react";
import ReactDOM from 'react-dom/client';
import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";
import './styles.css';

//Selecciono la etiqueta de mi index donde se va a renderizar mi componente
ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        {/* <FirstApp name='Brayan' lastName='Gamez' age={28} /> */}
        <CounterApp value={5} />
    </React.StrictMode>
 )