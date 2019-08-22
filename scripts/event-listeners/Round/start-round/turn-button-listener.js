import { getRoundData } from "../../../Helpers/roundDataSelection.js";
import { removeEventListeners } from "../../../Helpers/removeListeners.js";

export const attachTurnButtonListener = () => {
  document.getElementById("confirm").addEventListener("click", e => {
    console.log(getRoundData());
    removeEventListeners();
  });
};
