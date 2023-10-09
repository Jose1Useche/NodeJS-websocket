import { Note } from "./models/model.js";

export default (io) => {
    io.on('connection', async socket => {
        io.emit('notesToShow', await emitNotes());

        socket.broadcast.emit('message', 'Nuevo usuario conectado!!!');
        
        socket.on('newnote', async data => {
            const newNote = new Note(data); //recibe el title y el description que son justamente los campos del esquema definido.
            const savedNote = await newNote.save();
            // socket.emit('savedNote', savedNote);
            io.emit('savedNote', savedNote);
        });

        
        socket.on('client:sendingGeoLoc', (data, callback) => {
            // socket.broadcast.emit('server:sendingGeoLoc', `https://google.com/maps?q=${data.latitude},${data.longitude}`);
            io.emit('server:sendingGeoLoc', `https://google.com/maps?q=${data.latitude},${data.longitude}`);
            callback('mensaje de recibido del server!!!');
        });
        
        socket.on('join', ({ userName, room }) => {
            socket.join(room);
            socket.broadcast.to(room).emit('message', `${userName} has joined to ${room}. His Id is ${socket.id}!!!`);
        });

        socket.on('client:messageToRoom', ({ message, room }) => {
            io.to(room).emit('message', message);
        });

        socket.on('disconnect', () => {
            io.emit('message', 'A user has left!!!');
        });
    });
}

const emitNotes = async () => {
    const notes = await Note.find();
    return notes;
};