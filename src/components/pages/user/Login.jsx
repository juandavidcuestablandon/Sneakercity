import { Link } from 'react-router-dom'
const Login = () => {



  return (
    <div>
      <h1>Iniciar Sesión </h1>

      <div className="container d-flex  loginbox">
        <form action="" className="m-5 login">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" />
          <button type="submit">Ingresar</button>

           <p>No tienes Cuenta aun <Link to="/createaccount" className='text-danger'>Regístrate</Link></p>
        </form>

        <div className="m-5">
          <img
            src="https://i.pinimg.com/564x/1b/46/6b/1b466bdbf28be70954d6180d05b9025b.jpg"
            alt="sneakerscollection"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Login;
