
const CreateAccount = () => {
  return (
    <div>
        <h1>Crear Cuenta</h1>
        <div  className="container d-flex">
     <form  className="formcreate">
          <label htmlFor="name">Nombre</label>
          <input type="text"  name="name"/>

          <label htmlFor="lastname ">Apellido</label>
          <input type="text"  name="lastname"/>

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" />

         <label htmlFor="pas">Contraseña </label>
          <input type="password" name="pass"/>

          <label htmlFor="repas">Repetir Contraseña</label>
          <input type="password" />

          <button type="submit">Crear Cuenta</button>
        </form>



      <div >
         <img className="imgcreate" src="https://i.pinimg.com/564x/eb/b7/ff/ebb7ffbf83bbe3f9bfeef1c5edfafe6d.jpg" alt="colección de sneakers" />
      </div>

        </div>
   


    </div>
  )
}

export default CreateAccount