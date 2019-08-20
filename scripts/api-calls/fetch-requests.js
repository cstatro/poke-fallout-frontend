const URL = "http://localhost:3000/";

const POKEMONS = `${URL}/pokemons`;
const USERS = `${URL}/users`;

//no error handling for bad login
export const registerUser = (config, callback) => {
  fetch(USERS, config)
    .then(resp => resp.json())
    .then(json => callback(json["data"]["attributes"]));
};
