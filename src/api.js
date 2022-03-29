/*
export const searchPokemon = async(pokemon) => {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){

    }
}*/

export const getPokemons = async(limit=30, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error){

    };
};

export const getPokemonData = async(pokemon) => {
    pokemon = pokemon.toLowerCase(); 
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let urlSpeciesPokemon = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
    try {
        const response = await fetch(url);
        const description = await fetch(urlSpeciesPokemon);
        const data = await response.json();
        const moreData = await description.json();
        const pokemonData = {
            'data' : data,
            'more_data' : moreData
        };
        
        //console.log(pokemonData)
        return pokemonData;
    } catch(error){

    };
};