import app from "./app.js";
import { Server as WebsocketServer } from "socket.io";
import http from 'http';
import { connectDB } from './db.js';
import { response } from "express";

let httpServer = null;
let io = null;
const server = http.createServer(app); //Aunque parezca redundante, es necesario para la creacion de nuestro websocket.

connectDB()
    .then(response => {
        console.log(response);
        
        httpServer = server.listen(3000,() => {
            console.log('Server is up on port 3000.');
        });
        
        io = new WebsocketServer(httpServer);
    })
    .catch(response => {
        console.log(response);
    });


