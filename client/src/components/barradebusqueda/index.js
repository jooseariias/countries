import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { getCountriesByName } from '../../redux/actions'
import "../../estilos/Searchbar.css"


export default function SearchBar() {

  const dispatch= useDispatch()
  const [name, setName] = useState("")

  function handleInputCountries(el){
    el.preventDefault()
    setName(el.target.value)
   
  }

  function handleSubmit(el){
    el.preventDefault();
    if(!name) return alert("Debes ingresar un pais")
    else{
      dispatch(getCountriesByName(name))
      setName ("")
    }
       
  }

  return (
    <div>
        <div>
          <form>
            <input className='Busqueda' type="text" placeholder='Busca un Pais' value={name} onChange={(el)=> handleInputCountries(el)} />
            <button className='sumit-bar' type='submit' onClick={(el)=> handleSubmit(el)} >Buscar</button>
            </form>
        </div>
    </div>
  )
}
