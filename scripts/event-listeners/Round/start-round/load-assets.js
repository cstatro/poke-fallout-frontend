import { loadUser } from "../../../api-calls/fetch-requests.js";
import { objToDataSet } from "../../../Helpers/mapObjToDataSet.js";
import { makeStatDiv } from "../../../templates/Round/stat-div.js";
import { renderPokemon } from "../../../templates/round/pokemon-card.js";

export const loadAssets = () => {
  document.querySelector(".starter-area").remove();
  const gameArea = document.querySelector(".game-area");
  loadUser(gameArea.dataset.name, renderAssetsFromJson);
};

const renderAssetsFromJson = json => {
  const pokemons = json.pokemons.filter(p => p.alive === true);
  const gameArea = document.querySelector(".game-area");
  console.log(pokemons);
  objToDataSet(json, gameArea);
  console.log(gameArea.dataset);
  renderUserStats();
  loadExistingPokemon(pokemons);
};

const renderUserStats = () => {
  const userData = document.querySelector(".game-area").dataset;
  const statsDiv = document.querySelector("#stats");
  const {
    name,
    authority,
    facility_tier,
    facility_cleanliness: cleanliness
  } = userData;
  const statList = { name, authority, cleanliness, facility_tier };
  for (const key in statList) {
    statsDiv.innerHTML += makeStatDiv(key, statList[key]);
  }
};

export const loadExistingPokemon = json => {
  console.dir(json);
  const game_div = document.getElementById("game-view");
  game_div.innerHTML = `<div id="pokemon-display"></div>`;
  const poke_div = document.getElementById("pokemon-display");
  json.forEach(poke =>
    poke_div.insertAdjacentHTML("beforeend", renderPokemon(poke))
  );
};
