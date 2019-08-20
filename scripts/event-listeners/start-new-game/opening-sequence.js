export const startOpeningSequence = json => {
  const gameArea = document.querySelector(".game-area");
  gameArea.innerHTML = "";
  console.log(json);
  gameArea.dataset.user = json;
};
