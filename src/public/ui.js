import { saveNote, sendingGeoLocToServer } from "./socket-client.js";

export const onHandleSubmit = e => {
    e.preventDefault();
    saveNote(noteForm['title'].value, noteForm['description'].value);
};

export const sendGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        sendingGeoLocToServer(position);
    });
};