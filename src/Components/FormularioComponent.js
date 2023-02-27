import React, { useState } from 'react'


export const FormularioComponent = () => {

const[usuario, setUsuario] = useState({});

const conseguirDatosFormulario = e => {
e.preventDefault();

let datos = e.target;

let usuario = {
    nombre: datos.nombre.value,
    apellido: datos.apellido.value,
    genero: datos.genero.value,
    bio: datos.bio.value
};
 

console.log(usuario);
setUsuario(usuario);


}



  return (
    // <div className='box'>
    <div>
<h1>Formularios con react</h1> 
 {/*MOSTRAMOS EN PANTALLA LOS DATOS DEL FORMULARIO  */}
<div className='info_usuario'>
    {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: <p>{usuario.bio}</p>

</div>

{/*AHORA LO QUE VAMOS A HACER ES AGARRAR LOS DATOS QUE VIENEN EN EL FORMULARIO LO VAMOS A HACER CON EL EVENTO ONSUBMIT LO QUE NOS HACE ES CUANDO DAMOS CLICK NOS EJECUTA*/}

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" 
         placeholder='nombre'
         name="nombre"/>
        <input type="text" 
        placeholder='apellido'
        name="apellido"/>
        
        <select name="genero">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
        </select>
            
        <textarea placeholder='Biografia' name="bio"></textarea>

        <input type="submit" value="Enviar"/>
        
      </form>
      </div>
    // </div>
  )
}
