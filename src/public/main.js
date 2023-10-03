const socket = io();

socket.on('notesToShow', data => {
    console.log(data);
});