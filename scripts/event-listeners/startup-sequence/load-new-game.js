import { newForm } from "../../templates/new-game-form.js";

const gameArea = document.querySelector(".game-area");

export const loadNewForm = () => {
  gameArea.innerHTML = newForm();
  attachButtonListen();
};

const attachButtonListen = () => {
  const newFormSelect = document.getElementById("new-game");
  gameArea.addEventListener("click", e => {
    if (e.target.className === "select-button") {
      gameArea.dataset.player = newFormSelect.elements[0].value;
      console.log("hey");
      newFormSelect.reset();
    }
  });
};
