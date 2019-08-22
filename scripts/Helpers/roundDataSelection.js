import { fromSetUserData } from "./objectFromDataset.js";
import { grabPokeDataFromDivs } from "./grabPokemonData.js";

export const getRoundData = () => {
  const userData = document.querySelector(".game-area").dataset;
  const userInfo = fromSetUserData(userData);
  const pokeDivs = document.querySelectorAll(".pokemon-card");
  const pokeObjects = grabPokeDataFromDivs(pokeDivs);
  const newObj = { ...userInfo, pokemons: pokeObjects };
  return newObj;
};
