import { loadUser } from "../../../api-calls/fetch-requests.js";
import { objToDataSet } from "../../../Helpers/mapObjToDataSet.js";
import { makeStatDiv } from "../../../templates/Round/stat-div.js";

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
  renderUserStats();
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
