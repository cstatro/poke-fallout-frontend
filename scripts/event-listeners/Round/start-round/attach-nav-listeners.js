export const attachNavListeners = () => {
  const nav = document.getElementById("nav-bar");
  nav.addEventListener("click", e => {
    if (e.target.id === "clean") {
      console.log("got-em");
      clean();
    }
  });
};

const clean = () => {
  const gameArea = document.querySelector(".game-area");
  let authorityStat = document.getElementById("authority-stat");
  let cleanliness = document.getElementById("cleanliness-stat");

  if (
    parseInt(gameArea.dataset.authority) >= 10 &&
    gameArea.dataset.facility_cleanliness < 100
  ) {
    gameArea.dataset.authority = gameArea.dataset.authority - 10;
    gameArea.dataset.facility_cleanliness =
      parseInt(gameArea.dataset.facility_cleanliness) + 10;
    authorityStat.innerText = `authority: ${gameArea.dataset.authority}`;
    cleanliness.innerText = `cleanliness: ${
      gameArea.dataset.facility_cleanliness
    }`;
  }
};
