export const attachPokeActionListeners = () => {
  const actionBars = document.querySelectorAll(".pokemon-actions");

  actionBars.forEach(bar =>
    bar.addEventListener("click", e => {
      const buttons = [...bar.children];
      const button = e.target.closest("button");
      highLightButton(buttons, button);
    })
  );
};

const highLightButton = (buttons, button) => {
  buttons.forEach(b => {
    if (b != button) {
      b.className = "pokemon-action-button";
    }
  });
  button.className += " highlight-action";
};
