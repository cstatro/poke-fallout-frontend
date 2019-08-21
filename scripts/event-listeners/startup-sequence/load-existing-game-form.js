import { findForm } from "../../templates/find-game-form.js";
import { postConfig } from "../../api-calls/config.js";
import { loadUser } from "../../api-calls/fetch-requests.js";
import {
  loadExistingPokemon,
  loadAssets
} from "../Round/start-round/load-assets.js";

const gameArea = document.querySelector(".game-area");

export const findGameForm = () => {
  gameArea.innerHTML = findForm();
  attachButtonListen();
};

const attachButtonListen = () => {
  const findFormSelect = document.getElementById("find-game");
  gameArea.addEventListener("click", e => {
    if (e.target.className === "select-button") {
      const users_name = findFormSelect.elements[0].value.toLowerCase();
      gameArea.dataset.name = users_name;
      loadUser(users_name, console.log);
      findFormSelect.reset();
      loadAssets();
    }
  });
};
