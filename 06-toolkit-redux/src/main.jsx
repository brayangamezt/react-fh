import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//Importando el Store
import { store } from './store/store.js';

//Otros componente
import { Pokemon } from './Pokemon.jsx';


//Importando el proovedor que abarcara toda la aplicacion y pasara la informacion 
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <App /> */}
      <Pokemon/>
    </Provider>
  </React.StrictMode>,
)
