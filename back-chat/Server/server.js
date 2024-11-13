const express = require('express');
require('dotenv').config();
const { dbConnection } = require('../database/config');
const cors = require('cors');

class Server {
    constructor() {
        this.headers = {
            cors: {
                origin: ['http://127.0.0.1:4000', 'http://localhost:3000','https://silly-babka-367e23.netlify.app','https://amazing-choux-a38a8f.netlify.app','https://uaochatreact.netlify.app'],
                methods: ["GET","POST"]
            }
        }

        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server, this.headers);

        this.path = {
            auth: '/api/auth'
        }


        this.connecToDB();
        this.addMiddlewares();
        this.setRoutes();

        this.sockets();
    }

    async connecToDB() {
        await dbConnection();
    }

    addMiddlewares() {
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    setRoutes() {
        this.app.use(this.path.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on('connection', socket => {
            console.log('Cliente conectado.', socket.id);

            socket.on('userConnected', (user) => {
                console.log(`Usuario conectado: ${user.name}`);
                
                // Guardar en el socket el ID del usuario para identificarlo al desconectarse
                socket.userId = user._id;
                socket.name = user.name;
                socket.status = 'connected';
                
                // Emitir el estado actualizado a todos los usuarios
                this.io.emit('updateUserStatus', { id: user._id, name: user.name, status: 'connected',socketId:socket.id  });
            });

            socket.on('mensaje-de-cliente', (payload, callback) => {
                console.log(payload);

                callback('tu mensaje fue recibido!!');

                payload.from="desde el server";
                this.io.emit('mensaje-de-server',payload);
            });
            
            socket.on('disconnect', () => {
                console.log('Cliente desconectado.',socket.name);
                this.io.emit('userDisconnected', { id: socket.userId, name: socket.name, status: 'disconnected' });
            })
        })
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor correindo en puerto', process.env.PORT)
        })
    }
}

module.exports = Server;