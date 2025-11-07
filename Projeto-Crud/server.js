const express = require('express'); //importar o framework
const app = express(); //instancia do express
const port = 3000; //porta do servidor
const path = require('path'); //permitir trabalhar com o caminho de arquivos estáticos

//estabelecer onde estão os arquivos do front
app.use(express.static('public'));

//instanciar o banco de dados
const db = require('./db');

//rota padrão para puxar o arquivo do front-end
app.get('/', (req, res) =>{
    //res.send("front-funcionando");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//linkar com a API.JS
const apiRoutes = require('./routes/api');

//middleware para interpretar o corpo das requisições que chegam no formato JSON
app.use(express.json());

//define o caminho base para as rotas importadas para o módulo "apiRoutes"
app.use('/api/users/', apiRoutes);

//porta do servidor
app.listen(port, () =>{
    console.log("servidor funcionando: http://localhost:3000");
});
