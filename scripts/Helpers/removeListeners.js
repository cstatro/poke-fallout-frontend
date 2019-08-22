import { loadAssets } from "../event-listeners/Round/start-round/load-assets.js";
export const removeEventListeners = () => {
  removeNavListeners();
  removeConfirmListeners();
  removePokemonDivs();
  removeUserStats();
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
