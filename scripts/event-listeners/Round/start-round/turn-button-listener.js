import { getRoundData } from "../../../Helpers/roundDataSelection.js";

export const attachTurnButtonListener = () => {
  console.log("fucking javascript");
  document.getElementById("confirm").addEventListener("click", e => {
    console.log(getRoundData());
    getRoundData;
  });
};
