import { titleScreen } from "../../templates/title-card.js";
import { loadGameSelect } from "./load-game-select.js";

const gameArea = document.querySelector(".game-area");

export const loadTitle = () => {
  gameArea.innerHTML += titleScreen();
  attachClickListen();
};

const attachClickListen = () =>
  gameArea.addEventListener("click", e => {
    if (e.target.className === "start-button") {
      loadGameSelect();
    }
  });
