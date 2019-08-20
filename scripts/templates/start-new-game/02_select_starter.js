const dispStarter = obj => `<div class="starter-box">
<h2 class="starter-name">${obj.attributes.name}</h2>
<img src="${obj.attributes.image_url}" alt="" />
<div class="starter-details"><p>gender:${obj.attributes.gender}</p><p>HP:${
  obj.attributes.hp
}</p></div>
</div>
`;

export const dispStarters = arr => arr.map(p => dispStarter(p)).join();

export const starterDiv = () => `<div class="starter-div"></div>`;
