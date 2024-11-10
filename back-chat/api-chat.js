const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config');
const cors = require('cors');

const app = express();

dbConnection();

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(express.static('pblic'))

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

app.listen(process.env.PORT,()=>{
    console.log("Servidor corriendo en el puerto",process.env.PORT);
});