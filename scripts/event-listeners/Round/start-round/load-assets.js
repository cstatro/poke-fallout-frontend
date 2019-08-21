import { loadUser } from "../../../api-calls/fetch-requests.js";
import { objToDataSet } from "../../../Helpers/mapObjToDataSet.js";

export const loadAssets = () => {
  document.querySelector(".starter-area").remove();
  const gameArea = document.querySelector(".game-area");
  loadUser(gameArea.dataset.name, renderAssetsFromJson);
};

const renderAssetsFromJson = json => {
  const pokemon = json.pokemons.filter(p => p.alive === true);
  const gameArea = document.querySelector(".game-area");
  console.log(pokemon);
  objToDataSet(json, gameArea);
  console.log(gameArea.dataset);
};
