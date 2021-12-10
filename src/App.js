import './App.css'
import Pokemon from './components/Pokemon'

function App(){
  return(
    <>
      <h1 className='title'>Pokedex</h1>
      <Pokemon 
        photo="https://i.pinimg.com/originals/96/d2/1d/96d21d738561947f96255e6f12f1754a.png"
        nome="Bulbasaur"
        hp={100}
        attack={100}
        defense={100}
        types={['grass','fire','water']} 
      />      
      <Pokemon 
        photo="http://pm1.narvii.com/6511/f02e4c25df765e6e866dcbd5aa9b65793bc28dd1_00.jpg"
        nome="Charmander"
        hp={100}
        attack={100}
        defense={100}
        types={['fire','fire','water']} 
      />       
    </>      
  )
}

export default App