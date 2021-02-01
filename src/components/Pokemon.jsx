import React from 'react';

const Pokemon = ({ pokemon }) => {
    return (
        <div className='pokemon'>
            <div className='pokemonName'>
                <p>{pokemon.name}</p>
            </div>
            <div className='pokemonMeta'>
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className='pokemonImage'>
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className='pokemonClassification'>
                <p>{pokemon.classification}</p>
            </div>
            <div className='pokemonFastAttacks'>
                 {pokemon.attacks.fast.slice(0, 3).map(attack =>
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}
                    </span>)}
            </div>
            <div className='pokemonSpecialAttacks'>
                 {pokemon.attacks.special.slice(0, 3).map(attack =>
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}
                    </span>)}
            </div>
        </div>
    );
}
 
export default Pokemon;