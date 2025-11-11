//lógica do front-end
//acessar os dados do formulário
const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');

carregarUsuarios();

//capturar os dados do formulário presente no index.html
form.addEventListener('submit', e=>{
    e.preventDefault();

    //capturar os dados de cada item do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //funcao (cadastrar)
    cadastrarUsuario(nome, email);
});

//função para cadastrar
function cadastrarUsuario(nome, email) {
    //fetch()
    fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(()=>{
        form.reset();
        carregarUsuarios();
    })
}

//função para carregar os usuários cadastrados no banco
function carregarUsuarios(){
    fetch('/api/users')
    .then(res => res.json())
    .then(data => {
        userList.innerHTML = '';
        data.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `${user.nome} (${user.email}) 
                <button onclick="atualizarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>`;
                userList.appendChild(li);
        });
    });
};




//função para editar usuários
function atualizarUsuario(id) {
    const nome = prompt('Digite o novo nome:');
    const email = prompt('Digite o novo email:');
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    })
    .then(() => {
        carregarUsuarios();
    })
}

//função para excluir
function excluirUsuario(id){
    const confirmacao = confirm("Tem certeza?");
    if (!confirmacao) {
        return;
    }
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(()=>{
        carregarUsuarios();
    })
}
