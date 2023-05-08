import {useEffect, useCallback} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
export default function Pokemon(props){
  const { pokemons, setPokemons, setSelectedPokemon } = props
  useEffect(() => {
    if(pokemons.length === 0){
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        setSelectedPokemon(res.data.results[0].name)
        setPokemons(res.data.results)})
        
      .catch(err => console.log(err))
    }
    
  },[setPokemons, pokemons, setSelectedPokemon])
  const handlePokemonChange = useCallback((e) => {
    setSelectedPokemon(e.target.value)
  },[setSelectedPokemon])
  return(
    <>
      <select onChange = {handlePokemonChange}>
        {pokemons?.map(pokemon => <option key={pokemon.name} value = {pokemon.name}>{pokemon.name}</option>)}
      </select>
    </>
  )
}

Pokemon.propTypes = {
    pokemons: PropTypes.objectOf({name: PropTypes.string, url: PropTypes.string}).isRequired,
    setPokemons: PropTypes.func.isRequired,
    setSelectedPokemon: PropTypes.func.isRequired
}