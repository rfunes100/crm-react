import { obtenercliente, actualizacliente  } from "../data/clientes"

import {  redirect, Form, useNavigate, useLoaderData , useActionData } from "react-router-dom"

 
import Error from "./Error"
import Formulario from "./Formulario"


export async function loader({params})
{
    const cliente = await obtenercliente(params.clienteid)
    
    if( Object.values(cliente).length === 0)
    {
        throw new Response('', {
            status: 404,
            statusText: 'no hay resultado'
        })
    }


  return cliente 
}

export async function action( {request, params})
{
    const  formData = await request.formData()

 const datos = Object.fromEntries(formData)
 const email = formData.get('email')
 //console.log('email',email)
 const errores = []
 if(Object.values(datos).includes(''))
 {
   errores.push('todos los campos son obligatorios')
 //return 'abc'
 }
 let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

 if(!regex.test(email))
 {
  errores.push('email no es valido')

 }
 
 if( Object.keys(errores).length)
 {
  
  return errores
 }

 console.log('pasos para' ,params , )
 console.log('edicion', params.clienteid, datos)
  await actualizacliente(params.clienteid, datos)
  return redirect('/')
  

}

const Editarclientes = () => {

    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()

  return (
    <>
     <h1 className=" font-black text-4xl text-blue-900">Editar Cliente </h1>
    <p className=" mt-3">Modificar datos clientes</p>

<div className=" flex justify-end">
  <button className=" bg-blue-800 text-white px-3 py-1 font-bold uppercase "
   onClick={() => navigate(-1)}

  >
    Volver

  </button>

</div>

<div className=" bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">


{
  errores?.length && errores.map((error, i)=> <Error key={i}>{error}</Error>


  ) 

}


 <Form
  //action="/cientes"
  method="post"
  //action="/cientes/nuevo"
  noValidate
 >
  
  <Formulario
  cliente={cliente}
  >

</Formulario>

<input type="submit" 
 className=" mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
value='guardar cambios'
/>


</Form>


</div>


   </>

  )
}

export default Editarclientes