const dispStarter = obj => `<div data-id=${obj.id} class="starter-box">
<h2 class="starter-name">${obj.attributes.name}</h2>
<img src="${obj.attributes.image_url}" alt="" />
<div class="starter-details"><p>gender:${obj.attributes.gender}</p><p>HP:${obj.attributes.hp}</p></div>
</div>
`;

export const dispStarters = arr => arr.map(p => dispStarter(p)).join("");

export const starterDiv = () => `<div class="starter-div"></div>`;

const starterText = () => `<div class="cut-scene-box-top">
<p>
  Three broken Pokemon lay before you. You only have enough resources to support one. The others will surely perish. Make your choice and be quick about it...
</p>
<h3 class="continue-click">CHOOSE YOUR POKEMON!</h3>
</div>`;

export const starterArea = () =>
  `<div class="starter-area">${starterDiv() + starterText()}</div>`;
