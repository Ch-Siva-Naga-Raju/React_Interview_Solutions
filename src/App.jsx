
import { useState } from 'react';
import Pokemon from './Pokemon'
import PokemonDetails from './PokemonDetails';
export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [abilities, setAbilities] = useState([]);
  return (
    <div className="App">
      <Pokemon 
        setPokemons={setPokemons} 
        pokemons = {pokemons}
        setSelectedPokemon = { setSelectedPokemon }
      />
      {selectedPokemon && 
      <PokemonDetails 
        selectedPokemon={selectedPokemon} 
        pokemons={pokemons}
        abilities = { abilities }
        setAbilities = { setAbilities }
      />}
    </div>
  );
}
