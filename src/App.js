import { useState } from "react"
import './App.css'

// ! importar usestate para poder usarlo dento de nuestra 


const App = () => {
  
  // useState se utiliza como un array en el que declaras la una variable state "count"
  // que retiene la data y un state setter "setCount" que actualiza el valor de la variable
  //! ejemplo: 
  //* const [count, setCount] = useState(0)
  //* const increment = () => {
  // *  setCount ( count + 1 )
  //* }
  
  const [ darkMode, setDarkMode ] = useState(false)

  const modeToggler = () => {
    setDarkMode ( !darkMode )
  }

  return(
    <div className= { darkMode ? " dark_mode app " : "app" }  >
      <h1>Hello React!</h1>
      <button className="btn" onClick={modeToggler} > { darkMode ? "🌜" : "🌞" } </button>
      <h1> { darkMode ? "dark" : "light" } </h1>
    </div>
  )
}


export default App