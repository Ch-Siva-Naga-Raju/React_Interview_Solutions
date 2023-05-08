import PropTypes from 'prop-types'
import {useEffect} from 'react';
import axios from 'axios';
export default function PokemonDetails(props){
const {selectedPokemon, pokemons, abilities, setAbilities} = props;
useEffect(() => {
if(selectedPokemon){
  axios.get(pokemons?.filter(pokemon => pokemon.name === selectedPokemon)?.[0]?.url).then(res => {
    setAbilities(res.data.abilities.map(val => val.ability.name))
  }) 
}
},[selectedPokemon, pokemons, setAbilities])

return(
  <>
  <h3>{selectedPokemon} abilities:</h3>
  {abilities?.map((ability, index) => <div key={ability}>{index + 1}.{ability}</div>)}
  </>
)
}

PokemonDetails.propTypes = {
    selectedPokemon: PropTypes.string.isRequired,
    pokemons: PropTypes.objectOf({name: PropTypes.string, url: PropTypes.string}).isRequired,
    abilities: PropTypes.objectOf({ability: PropTypes.objectOf({name: PropTypes.string})}).isRequired,
    setAbilities: PropTypes.string.isRequired
}

