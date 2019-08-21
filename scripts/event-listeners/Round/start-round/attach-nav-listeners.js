export const attachNavListeners = () => {
  highLightListen();
  const nav = document.getElementById("nav-bar");
  nav.addEventListener("click", e => {
    if (e.target.id === "clean") {
      clean();
    }
  });
};

const highLightListen = () => {
  console.log("madeit");
  const nav = document.getElementById("nav-bar");
  nav.addEventListener("click", e => {
    if (e.target.id != "clean") {
      highLightButton(e.target.closest("button"));
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

const highLightButton = button => {
  document.querySelectorAll(".nav-button").forEach(b => {
    if (b != button) {
      b.className = "nav-button";
    }
    button.className += " highlight-nav";
  });
};
