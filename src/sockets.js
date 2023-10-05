import { Note } from "./models/model.js";

export default (io) => {
    io.on('connection', async socketClient => {
        console.log('New user connected');
        
        io.emit('notesToShow', await emitNotes());
        
        socketClient.on('newnote', async data => {
            const newNote = new Note(data); //recibe el title y el description que son justamente los campos del esquema definido.
            const savedNote = await newNote.save();
            // socketClient.emit('savedNote', savedNote);
            io.emit('savedNote', savedNote);
        });
    });
}

const emitNotes = async () => {
    const notes = await Note.find();
    return notes;
};