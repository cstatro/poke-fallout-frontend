import { newForm } from "../../templates/new-game-form.js";
import { postConfig } from "../../api-calls/config.js";
import { registerUser } from "../../api-calls/fetch-requests.js";
import { startOpeningSequence } from "../start-new-game/opening-sequence.js";

const gameArea = document.querySelector(".game-area");

export const loadNewForm = () => {
  gameArea.innerHTML = newForm();
  attachButtonListen();
};

const attachButtonListen = () => {
  const newFormSelect = document.getElementById("new-game");
  gameArea.addEventListener("click", e => {
    if (e.target.className === "select-button") {
      const obj = { name: newFormSelect.elements[0].value };
      const config = postConfig(obj);
      console.log(obj);
      registerUser(config, startOpeningSequence);

      newFormSelect.reset();
    }
  });
};
