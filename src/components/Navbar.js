import React from 'react';

const Navbar = () => {
    let imgURL = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container-fluid">
                    <a className='mx-auto d-block' href="./">
                        <img 
                            className='pokemon-image'
                            src={imgURL}
                            alt='pokeapi-logo'  
                        />
                    </a>                    
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
