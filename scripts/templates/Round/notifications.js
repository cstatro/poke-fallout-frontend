export const makeNotifications = arr =>
  arr.map(str => makeLineItem(str)).join("");

const makeLineItem = str => `<li>${str.text}</li>`;
