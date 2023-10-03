import app from "./app.js";
import { Server as WebsocketServer } from "socket.io";
import http from 'http';
import { connectDB } from './db.js';
import sockets from "./sockets.js";

const server = http.createServer(app); //Aunque parezca redundante, es necesario para la creacion de nuestro websocket.
const io = new WebsocketServer(server);

connectDB()
    .then(response => {
        console.log(response);
        
        server.listen(3000,() => {
            console.log('Server is up on port 3000.');
        });
        
        sockets(io);
    })
    .catch(error => {
        console.log(error);
    });


