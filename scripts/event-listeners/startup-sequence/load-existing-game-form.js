import { findForm } from "../../templates/find-game-form.js";

const gameArea = document.querySelector(".game-area");

export const findGameForm = () => {
  gameArea.innerHTML = findForm();
  attachButtonListen();
};

const attachButtonListen = () => {
  const findFormSelect = document.getElementById("find-game");
  gameArea.addEventListener("click", e => {
    if (e.target.className === "select-button") findFormSelect.reset();
  });
};
