import { loadAssets } from "../event-listeners/Round/start-round/load-assets.js";
import { getRoundData } from "./roundDataSelection.js";
import { roundUpdate } from "../api-calls/fetch-requests.js";

export const removeEventListeners = () => {
  const userId = document.querySelector(".game-area").dataset.id;
  const roundData = getRoundData();
  removeNavListeners();
  removeConfirmListeners();
  removePokemonDivs();
  removeUserStats();
  roundUpdate(`${userId}`, roundData, console.log);
  loadAssets();
};

const removeNavListeners = () => {
  const nav = document.querySelector("#nav-bar");
  const cloneNav = nav.cloneNode(true);
  nav.parentNode.replaceChild(cloneNav, nav);
};

const removeConfirmListeners = () => {
  const confirm = document.getElementById("confirm");
  const cloneConfirm = confirm.cloneNode(true);
  confirm.parentNode.replaceChild(cloneConfirm, confirm);
};
const removeUserStats = () => {
  document.getElementById("stats").innerHTML = "";
};

const removePokemonDivs = () => {
  document.querySelector("#pokemon-display").innerHTML = "";
};
