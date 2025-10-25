const express = require('express'); //importar o framework
const app = express(); //instancia
const port = 3000;
const path = require('path');

//estabelecer onde estão os arquivos do front
app.use(express.static('public'));

//instanciar o banco de dados
const db = require('./db');

//rota
app.get('/', (req, res) =>{
    //res.send("front-funcionando");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//porta do servidor
app.listen(port, () =>{
    console.log("servidor funcionando: http://localhost:3000");
});
