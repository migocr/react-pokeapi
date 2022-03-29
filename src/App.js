import logo from './logo.svg';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import React from 'react';
import { getPokemonData, getPokemons } from './api';

const {useState, useEffect} = React;

function App() {

  const [pokemons, setPokemons] = useState([]);
  
  const getPokemonList = async () =>{
    try{
      const data = await getPokemons(); 
      //console.log(data);
      const promisesArray = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.name)
      });
      const results = await Promise.all(promisesArray);
      //console.log(promisesArray,' resultados');
      setPokemons(results);
    } catch(error){

    }
  }
  useEffect( () =>{
    getPokemonList();
  },[]);

  return (
    <div><Navbar/>
      <Searchbar/>
      <div className="App">
        <div className='container-sm'>
         
          <Pokedex pokemons={pokemons}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
