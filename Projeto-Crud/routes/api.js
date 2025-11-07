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

//rota para listar os usuários cadastrados no banco
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) =>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

//rota para editar usuários
router.put('/:id', (req, res) => {
    const {nome, email} = req.body;
    const {id} = req.params;

    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
        if(err) return res.status(500).send(err);
        res.json({id, nome, email});
    });
});


//rota para excluir usuários
router.delete('/:id', (req, res) =>{
    const {id} = req.params;

    db.query('DELETE FROM users WHERE id = ?', [id], (err)=>{
        if(err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

//exportar o módulo de rotas
module.exports = router;
