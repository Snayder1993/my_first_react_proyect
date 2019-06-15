import React, {useState} from 'react'

function Contador(){
    const [Contador,setContador] = useState(0)
    
    return <>
        <div>Mi Contador</div>
        <div>{Contador}</div>
        <button onClick={()=>{setContador(Contador + 1)}}>Sumar</button>
        <button onClick={()=>{setContador(Contador - 1)}}>Restar</button>
    </>
}

export default Contador