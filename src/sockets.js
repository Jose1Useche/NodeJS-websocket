import { Note } from "./models/model.js";

export default (io) => {
    io.on('connection', () => {
        console.log('New user connected');

        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('notesToShow', notes);
        };

        emitNotes();
    });
}