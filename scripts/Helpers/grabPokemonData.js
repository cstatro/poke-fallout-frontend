export const grabPokeDataFromDivs = pokeCards => {
  console.log(pokeCards);
  return [...pokeCards].map(card => {
    console.log(card);
    const actionDivs = card.getElementsByClassName("pokemon-actions");
    const current_action = actionDivs[0].querySelector(".highlight-action")
      .innerText;
    const food_policy = parseInt(
      actionDivs[1].querySelector(".highlight-action").dataset.food
    );
    const { id } = card.dataset;
    return { id: parseInt(id), current_action, food_policy };
  });
};
