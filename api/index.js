const routes = require('./routes')
const express = require('express');

const app = express();

routes(app);

const porta = 3000;

app.listen(porta,()=>{console.log("Tudo rodando certinho")})