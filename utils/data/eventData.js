import { clientCredentials } from '../client';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createEvent = (event) => new Promise((resolve, reject) => {
  fetch("", {})
    .then()
    .catch();
});

// const getGameTypes = () => new Promise((resolve, reject) => {
//   fetch("", {})
//     .then()
//     .catch();
// });

export { getEvents, createEvent };

// eslint-disable-next-line import/prefer-default-export

export default getEvents;
