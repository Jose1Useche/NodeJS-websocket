import { loadNotes, savedNotes, newUserConeted, geoLocSend } from "./socket-client.js";
import { onHandleSubmit, sendGeoLocation } from "./ui.js";

loadNotes();
savedNotes();
newUserConeted();
geoLocSend();

const noteForm = document.querySelector('#noteForm');

// const test = document.querySelector('#description');
// const test2 = document.getElementById('description2');
// console.log('test: ',test.dataset);
// console.log('test2: ',test2.dataset.hola);

noteForm.addEventListener('submit', onHandleSubmit);

const geoLocation = document.querySelector('#send-location').addEventListener('click', sendGeoLocation);