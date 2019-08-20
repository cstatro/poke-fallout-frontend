import { greetingText1 } from "../../templates/start-new-game/01_Text.js";
import { startThree } from "../../api-calls/fetch-requests.js";

export const startOpeningSequence = json => {
  const gameArea = document.querySelector(".game-area");
  gameArea.innerHTML = greetingText1();
  gameArea.dataset.user_id = json.id;
  gameArea.dataset.name = json.name;

  attachClickListen();
};

const attachClickListen = () => {
  const dialogBox = document.querySelector(".cut-scene-box-top");
  dialogBox.addEventListener("click", e => {
    const gameArea = document.querySelector(".game-area");
    const id = gameArea.dataset.user_id;
    console.log(id);
    dialogBox.remove();
    startThree(id, "yo");
  });
};
