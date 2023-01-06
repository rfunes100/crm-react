

export async function obtenerclientes() {

    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado


}

export async function obtenercliente(id) {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado


}

export async function eliminarcliente(id)
{
  console.log('eliniado',id)   
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: 'delete'
       
    })
    await respuesta.json()

} catch (error) {
    console.log ('error',error)
}

}



export async function agreegarcliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        await respuesta.json()

    } catch (error) {
        console.log ('error',error)
    }

}

export async function actualizacliente(id, datos)
{
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            } 
        })
        await respuesta.json()

    } catch (error) {
        console.log ('error',error)
    }


}