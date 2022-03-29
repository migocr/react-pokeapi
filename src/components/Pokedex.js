import React from 'react';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons} = props;
    console.log(props);
    return(
        <div className='container'>
            <div className="row">
          {pokemons.map((pokemon,index) => {
            return(
                <Pokemon pokemon={pokemon} key={index}/>   
            )
          })}
          </div>
        </div>
    );
};

export default Pokedex;