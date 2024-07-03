
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Para leer algo del STORE utilizamos useSelector de react tool kit
  const { value } = useSelector( state => state.counter );

  //Para disparar acciones con dispatch utilizamos el HOOK de useDispatch
  const dispatch = useDispatch();

  //Usando increment by
  const action ={
    payload:2
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ ()=> dispatch( increment() ) }> increment </button>
        <button onClick={ ()=> dispatch( decrement() ) }> decrement </button>
        <button onClick={ ()=> dispatch( incrementByAmount( 2 ) ) }> increment by 2 </button>
        <p>
        count is { value }
        </p>
      </div>
      <p className="read-the-docs">
        Current state value: {value}
      </p>
    </>
  )
}

export default App
