const URL = "http://localhost:3000";

const POKEMONS = `${URL}/pokemons`;
const USERS = `${URL}/users`;

//no error handling for bad login
export const registerUser = (config, callback) => {
  fetch(USERS, config)
    .then(resp => resp.json())
    .then(json => callback(json["data"]["attributes"]));
};
export const loadUser = (name, callback) => {
  fetch(USERS + `/${name}`)
    .then(resp => resp.json())
    .then(json => callback(json["data"]["attributes"]));
};

export const startThree = (userId, callback) => {
  fetch(`${URL}/start-three/${userId}`)
    .then(resp => resp.json())
    .then(json => callback(json));
};
export const killRejects = (userId, keepId, callback) => {
  fetch(`${URL}/kill-rejects/${userId}/${keepId}`)
    .then(resp => resp.json())
    .then(json => callback());
};
