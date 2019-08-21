
import { renderPokemon } from "../../templates/round/pokemon-card.js";

export const loadExistingContent = json => {
    console.dir(json)
    const game_div = document.getElementById('game-view')
    game_div.innerHTML = `<div id="pokemon-display"></div>`
    const poke_div = document.getElementById('pokemon-display')
    json.pokemons.forEach(poke => poke_div.insertAdjacentHTML('beforeend', renderPokemon(poke)))

  };