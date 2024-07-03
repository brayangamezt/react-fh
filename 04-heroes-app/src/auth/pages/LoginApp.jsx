import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginApp = () => {
  const navigate = useNavigate();

  const stateGlobal = useContext(AuthContext);
  console.log(stateGlobal)

  const onLogin =()=>{

    // login( 'Brayan Gamez' );

    navigate('/', {replace:true});
  }

  return (
    <div className='container mt-5' >
      <h1> Login App </h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin} > Login </button>
    </div>
  )
}
