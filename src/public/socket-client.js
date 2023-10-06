const socket = io();

export const loadNotes = () => {
    socket.on('notesToShow', data => {
        console.log(data);
    });
}

export const saveNote = (title, description) => {
    socket.emit('newnote', {
        title,
        description
    });
};

export const savedNotes = () => {
    socket.on('savedNote', data => {
        console.log('Nota guardada: ',data);
    });
}

export const newUserConeted = () => {
    socket.on('message', data => console.log(data));
}