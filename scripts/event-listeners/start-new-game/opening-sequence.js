import { greetingText1 } from "../../templates/start-new-game/01_Text.js";

export const startOpeningSequence = json => {
  const gameArea = document.querySelector(".game-area");
  gameArea.innerHTML = greetingText1();
  console.log(json);
  gameArea.dataset.user = json.name;
};
