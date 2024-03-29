export const renderPokemon = poke => `
    <div id="p${poke.id}" class="pokemon-card">
        <div class="pokemon-info">

            <div class="pokemon-identity">
                <h1 class="pokemon-name">${poke.name.charAt(0).toUpperCase() +
                  poke.name.slice(1)}</h1>
                <div class="info-span">
                    <h1 class="pokemon-level">Lv. ${poke.level}</h1>
                    <h1 class="pokemon-sex">${
                      poke.gender === "male" ? "M" : "F"
                    }</h1>
                </div>
                <img class="pokemon-image" src="${
                  poke.image_url
                }" alt="${poke.name.charAt(0).toUpperCase() +
  poke.name.slice(1)}">
            </div>

            <div class="pokemon-data">

                <fieldset class="bar-wrapper">
                    <legend class="bar-label">Health</legend>
                    <div class="bar-container"><div class="bar-display" style="width:${(poke.current_hp /
                      poke.hp) *
                      100.0}%">${poke.current_hp}</div></div>
                </fieldset>

                <fieldset class="bar-wrapper">
                    <legend class="bar-label">Loyalty</legend>
                    <div class="bar-container"><div class="bar-display" style="width:${
                      poke.loyalty
                    }%">${poke.loyalty}</div></div>
                </fieldset>

                <fieldset class="bar-wrapper">
                    <legend class="bar-label">Nourishment</legend>
                    <div class="bar-container"><div class="bar-display" style="width:${
                      poke.nourishment
                    }%">${poke.nourishment}</div></div>
                </fieldset>

                <div class="stat-list">

                    <div class="stat"><span class="stat-label">Attack</span><span class="stat-value">${
                      poke.attack
                    }</span></div>
                    <div class="stat"><span class="stat-label">Defense</span><span class="stat-value">${
                      poke.defense
                    }</span></div>
                    <div class="stat"><span class="stat-label">S. Atk</span><span class="stat-value">${
                      poke.special_attack
                    }</span></div>
                    <div class="stat"><span class="stat-label">S. Def</span><span class="stat-value">${
                      poke.special_defense
                    }</span></div>
                    <div class="stat"><span class="stat-label">Speed</span><span class="stat-value">${
                      poke.speed
                    }</span></div>

                </div>

            </div>
                            
        </div>

        <div class="pokemon-actions">

            <button title="health+,loyalty+" class="pokemon-action-button">Idle</button>
            <button  class="pokemon-action-button">Breeding</button>
            <button title="health-,loyalty-" class="pokemon-action-button">Exploring</button>
            <button title="food supply+,loyalty-" class="pokemon-action-button">Farming</button>

        </div>
        <div class="pokemon-actions">

            <button data-food="0" title="nourishment--" class="pokemon-action-button">None</button>
            <button data-food="1" title="nourishment-" class="pokemon-action-button">Meager</button>
            <button data-food="2" title="nourishment=" class="pokemon-action-button">Modest</button>
            <button data-food="3" title="nourishment+" class="pokemon-action-button">Generous</button>

        </div>

`;
