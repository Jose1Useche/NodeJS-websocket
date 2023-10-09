import { saveNote, sendingGeoLocToServer, joinRoom, messageToRoom } from "./socket-client.js";

export const onHandleSubmit = e => {
    e.preventDefault();
    saveNote(noteForm['title'].value, noteForm['description'].value);
};

export const sendGeoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        sendingGeoLocToServer(position);
    });
};

export const onHandleChatRoom = e => {
    e.preventDefault();
    let userName = chatRoom['userRoom'].value;
    let room = chatRoom['selectRoom'].value;
    joinRoom(userName, room);
};

export const sendMessageToChatRoom = e => {
    e.preventDefault();
    let message = senMsgToRoom['messageRoom'].value;
    let room = senMsgToRoom['selectRoomToMsg'].value;

    messageToRoom(message, room);
};