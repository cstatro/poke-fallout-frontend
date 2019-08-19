import { selectGame } from "../../templates/select-game.js";
import { findGameForm } from "./load-existing-game-form.js";
import { loadNewForm } from "./load-new-game.js";

const gameArea = document.querySelector(".game-area");

export const loadGameSelect = () => {
  gameArea.innerHTML = selectGame();
  attachClickListener();
};

const attachClickListener = () =>
  gameArea.addEventListener("click", e => {
    if (e.target.id === "new-game") {
      loadNewForm();
    } else if (e.target.id === "find-game") {
      findGameForm();
    }
  });
