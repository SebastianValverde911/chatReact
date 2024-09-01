const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('pblic'))

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))

app.listen(process.env.PORT,()=>{
    console.log("Servidor corriendo en el puerto",process.env.PORT);
});