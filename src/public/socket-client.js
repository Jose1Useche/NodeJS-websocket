const socket = io();

export const loadNotes = () => {
    socket.on('notesToShow', data => {
        console.log(data);
    });
}

export const savedNotes = () => {
    socket.on('savedNote', data => {
        console.log('Nota guardada: ',data);
    });
}

export const newUserConeted = () => {
    socket.on('message', data => console.log(data));
}

export const geoLocSend = () => {
    socket.on('server:sendingGeoLoc', data => {
        console.log(data);
    });
}

export const saveNote = (title, description) => {
    socket.emit('newnote', {
        title,
        description
    });
};

export const sendingGeoLocToServer = (data) => {
    let { latitude, longitude } = data.coords;
    let geoLoc = { latitude, longitude };
    console.log(geoLoc);

    socket.emit('client:sendingGeoLoc', geoLoc, (message) => { console.log('Geolocalización enviada.', message) });
};