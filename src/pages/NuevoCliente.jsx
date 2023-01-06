import { useNavigate, Form , useActionData , redirect  } from "react-router-dom"
import Formulario from "../components/Formulario"
import Error from "../components/Error"
import { agreegarcliente } from "../data/clientes"


export async function agregarcliente(datos){
  console.log('dato',datos)

  return 'abcdsdssd'
}

 export async function action (  {request } ) {

 const formData = await request.formData()
 //console.log('formData', [...formData])
 //return 
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

  await agreegarcliente( datos)
  return redirect('/')
// console.log('datos', datos)
// agregarcliente(datos)
 // )
 //return 
 //

}



//function NuevoCliente = () => {


const NuevoCliente = () => {
  
  const errores = useActionData()
  const navigate = useNavigate()




  return (
   <>
     <h1 className=" font-black text-4xl text-blue-900">Nuevo Cliente </h1>
    <p className=" mt-3">Llena todos los campos para agregar nuevo cliente</p>

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
 action="/cientes/nuevo"
method="post"
//action="/cientes/nuevo"
noValidate
 
 >
  
  <Formulario>

</Formulario>

<input type="submit" 
 className=" mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
value='registrar'
/>


</Form>


</div>


   </>
  )
}

export default NuevoCliente