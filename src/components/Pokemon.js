import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props;
    console.log(pokemon);
    return(
        <div className="col m-auto tarjetas">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 poke-image-div">
                        <img className="w-100 m-auto poke-img" src={pokemon.data.sprites.front_default}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">  <span className="pokedex-id">#{pokemon.data.id}</span> {pokemon.data.name}</h5>
                            <p className="card-text">{pokemon.more_data.flavor_text_entries[8].flavor_text}</p>
                                {pokemon.data.types.map((types,index) => {
                                    return(
                                        <p key={index} className="card-text d-inline ">
                                            <small className="text-muted types ">
                                            {types.type.name} 
                                            </small>
                                        </p>
                                    )
                                })} 
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Pokemon;