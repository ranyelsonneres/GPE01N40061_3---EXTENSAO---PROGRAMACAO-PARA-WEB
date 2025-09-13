//função de seta 
//não possui parâmetros
const saudacao = () => console.log("Olá");
saudacao(); //chamando a função

//apenas um parâmetro
const dobrar = numero => numero * 2;
console.log(dobrar(23));

//mais de um parâmetro
const somar = (a, b, c) => a + b + c;
console.log(somar(5, 2, 2));

//função ocupa mais de uma linha
const calcularArea = (base, altura) => {
    //lógica de negócio
    const area = (base * altura) / 2;
    return area;
}
console.log(calcularArea(2, 4));

//refatoramento
function verificarIdade2(idade){
    if (idade >=18){
        return true;
    } else {
        return false;
    }
}
const verificarIdade = idade => idade>=18;

//Objetos (POO)
const pessoa = {
    //propriedades
    nome: "Maria",
    idade: 12 
}
console.log(pessoa.nome);

//classe
class Pessoa {
    //construtor
    constructor(nome, idade){
        //this
        this.nome = nome;
        this.idade = idade;
    }
   //metodos

}
const p1 = new Pessoa("Fulano", 13);
const p2 = new Pessoa("Beltrano", 14);

class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        super(nome, idade)
        this.curso = curso;
    }
}

//Arrays
//ter uma variável em que eu posso armazenar diferentes tipos de dados;
let carrinho = [];
carrinho.push("meia"); //adicionar ao final
carrinho.push("gravata"); 
carrinho.pop();

console.log(carrinho);
