export const removeEventListeners = () => {
  removeNavListeners();
  removeConfirmListeners();
  removePokemonDivs();
};

const removeNavListeners = () => {
  const nav = document.querySelector("#nav-bar");
  const cloneNav = nav.cloneNode(true);
  nav.parentNode.replaceChild(cloneNav, nav);
};

const removeConfirmListeners = () => {
  const confirm = document.getElementById("confirm");
  const cloneConfirm = confirm.cloneNode(true);
  confirm.parentNode.replaceChild(cloneConfirm, confirm);
};

const removePokemonDivs = () => {
  document.querySelector("#pokemon-display").innerHTML = "";
};
