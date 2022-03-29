import React from 'react';
import {getPokemonData} from '../api.js';
import Pokemon from './Pokemon';

const {useState} = React;

const Searchbar = () => {

    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');

    const inputChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    const searchButton = async(event)=> {
        //console.log('apretandoboton');
        const data = await getPokemonData(search);
        console.log(data);
        setPokemon(data);
    }

    return (
        <div className='mx-auto d-block p-3'>
            <div className='d-flex buscador mx-auto d-block'>
                <input 
                    className='form-control me-2'
                    placeholder='Search Pokemon...'
                    onChange={inputChange}
                    onKeyPress={(e) => {
                        console.log(e);
                        if (e.key === "Enter") {
                            console.log("boton enter")
                            searchButton();
                        }
                    }}
                />
                <button className='btn btn-outline-success' onClick={searchButton} >Search</button> 
            </div>
            <div>
            {pokemon && 
                <div className='p-3'>
                    <Pokemon pokemon={pokemon} key={'pokemon'}/>
                </div>
            }
            </div>
        </div>
    )
};
export default Searchbar;
