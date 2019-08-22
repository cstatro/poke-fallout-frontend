import { loadUser } from "../../../api-calls/fetch-requests.js";
import { objToDataSet } from "../../../Helpers/mapObjToDataSet.js";
import { makeStatDiv } from "../../../templates/Round/stat-div.js";
import { renderPokemon } from "../../../templates/round/pokemon-card.js";
import { attachNavListeners } from "./attach-nav-listeners.js";
import { attachPokeActionListeners } from "./attach-pokecard-listeners.js";
import { fromSetUserData } from "../../../Helpers/objectFromDataset.js";
import { getRoundData } from "../../../Helpers/roundDataSelection.js";
import { attachTurnButtonListener } from "./turn-button-listener.js";

export const loadAssets = () => {
  const gameArea = document.querySelector(".game-area");
  loadUser(gameArea.dataset.name, renderAssetsFromJson);
};

const renderAssetsFromJson = json => {
  const pokemons = json.pokemons.filter(p => p.alive === true);
  const gameArea = document.querySelector(".game-area");
  objToDataSet(json, gameArea);
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
    facility_cleanliness: cleanliness,
    pokemon_capacity: max_capacity
  } = userData;
  const statList = {
    name,
    authority,
    cleanliness,
    facility_tier,
    max_capacity
  };
  for (const key in statList) {
    statsDiv.innerHTML += makeStatDiv(key, statList[key]);
  }
  //testing data grabs All this can be deleted eventually

  const testObject = fromSetUserData(userData);
  console.log("this is my user Data", testObject);
};

export const loadExistingPokemon = json => {
  const game_div = document.getElementById("game-view");
  game_div.innerHTML = `<div id="pokemon-display"></div>`;
  const poke_div = document.getElementById("pokemon-display");
  json.forEach(poke => {
    poke_div.insertAdjacentHTML("beforeend", renderPokemon(poke));
    const pokeCard = document.querySelector(`#p${poke.id}`);
    objToDataSet(poke, pokeCard);
  });
  //moretesting logs
  attachTurnButtonListener();
  ///delete above when ready
  attachNavListeners();
  attachPokeActionListeners();
};
