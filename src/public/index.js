import app from "./app.js";
import { Server as WebsocketServer } from "socket.io";
import http from 'http';

const server = http.createServer(app); //Aunque parezca redundante, es necesario para la creacion de nuestro websocket.

const httpServer = server.listen(3000,() => {
    console.log('Server is up on port 3000.');
});

const io = new WebsocketServer(httpServer);
