//lógica do front-end
//acessar os dados do formulário
const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');

//capturar os dados do formulário presente no index.html

//função para carregar os usuários cadastrados no banco
function carregarUsuarios(){
    fetch('/api/users')
    .then(res => res.json())
    .then(data => {
        userList.innerHTML = '';
        data.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `Nome: ${user.nome} - Email: ${user.email}`
            userList.append(li);
        });
    });
};

//função para cadastrar


//função para editar


//função para excluir
