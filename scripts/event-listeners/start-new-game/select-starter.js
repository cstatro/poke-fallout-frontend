import {
  dispStarters,
  starterDiv
} from "../../templates/start-new-game/02_select_starter.js";

export const renderSelectStarter = json => {
  const gameArea = document.querySelector(".game-area");
  console.log(gameArea);
  console.log(json.data);
  gameArea.innerHTML = starterDiv();
  const starterRow = document.querySelector(".starter-div");
  starterRow.innerHTML = dispStarters(json.data);
};
