const express = require('express')
const app = express()
const port = 3000

//estabeler o módulo do caminho
const path = require('path');

//criar um meio do nosso servidor, servir arquivos estáticos
app.use(express.static('front'));


app.get('/', (req, res) => {
  //res.send('Hello World - Teste!')
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
})

app.get('/sobre', (req, res) => {
  res.send('Pagina Sobre!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
