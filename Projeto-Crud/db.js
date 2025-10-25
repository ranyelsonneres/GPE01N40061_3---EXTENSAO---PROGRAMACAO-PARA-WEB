const mysql = require('mysql2');

//criar as credenciais de conexão
const db = mysql.createConnection({
    //credenciais de acesso
    host: 'localhost',
    user: 'root',
    password: 'admin123', //senha do seu sistema: catolica
    database: 'userdb_5',
    port: '3306' //3307
});

//estabelecer a conexão
db.connect(err =>{
    if (err) throw err;
    console.log("banco de dados conectado");
});

//exportar a conexão
module.exports = db;
