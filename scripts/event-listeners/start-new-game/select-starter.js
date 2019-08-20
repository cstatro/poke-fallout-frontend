import { killRejects } from "../../api-calls/fetch-requests.js";
import {
  dispStarters,
  starterArea
} from "../../templates/start-new-game/02_select_starter.js";

export const renderSelectStarter = json => {
  const gameArea = document.querySelector(".game-area");
  gameArea.innerHTML = starterArea();
  const starterRow = document.querySelector(".starter-div");
  starterRow.innerHTML = dispStarters(json.data);
  attachClickListener();
};

const attachClickListener = () => {
  const starterRow = document.querySelector(".starter-div");
  starterRow.addEventListener("click", e => {
    const userId = document.querySelector(".game-area").dataset.user_id;
    const selectedStarter = e.target.closest(".starter-box").dataset.id;
    killRejects(userId, selectedStarter, "dd");
  });
};
