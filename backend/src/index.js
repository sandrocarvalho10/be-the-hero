const express = require('express'); //importando essa biblioteca

const cors = require('cors'); //Biblioteca de segurança para acesso

const routes = require('./routes');

const app = express();  //Instanciaçao


app.use(cors());
app.use(express.json()); // Converte a requisição em objetos json para objetos javascript
app.use(routes);
app.listen(3333);