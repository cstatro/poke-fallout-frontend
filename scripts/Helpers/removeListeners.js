export const removeEventListeners = () => {
  removeNavListeners();
};

const removeNavListeners = () => {
  document.querySelector("#nav-bar").removeEventListener("click", e => {
    if (e.target.id != "clean") {
      highLightButton(e.target.closest("button"));
    }
  });
};
