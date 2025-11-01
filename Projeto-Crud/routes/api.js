//arquivo para tratar de todas as rotas do sistema
const express = require('express');
const router = express.Router();
const db = require('../db');

//criar as rotas
//passar pela rota: /api/users/
//create (insert)
router.post('/', (req, res) =>{
    const {nome, email} = req.body;

    //executar a instrução sql
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) =>{
            if (err) res.status(500).send(err);
            res.status(201).json({id: result.insertId, nome, email});
        });
});

//exportar o módulo de rotas
module.exports = router;
