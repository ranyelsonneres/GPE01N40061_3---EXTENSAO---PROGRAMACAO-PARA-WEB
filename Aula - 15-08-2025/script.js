//case sensitive
//variáveis
var v1 = 10; //global; reatribuição

let v2 = '10'; //bloco; local; reatribuição
let v5;

const v3 = 'Fulano'; //constate; não permite reatribuição
//v3 = 12;
const v4 = "valor";

//impresões
console.log("O valor é: " + v1);
document.writeln("Olá mundo!");
console.log(`O valor ${v1} foi criado no código`); //template literal

//entrada de dados
var idade = parseInt(window.prompt("Digite sua idade: "));
console.log(typeof idade);
var resultado = idade + 5;
document.writeln(`O resultado é: ${resultado}`); 

//operadores aritméticos
// + - / * ** %

//comparação
// < <= > >= = == === !=
console.log(2 == "2"); //igualdade (conteúdo)
console.log(2 === "2"); //estritamente igual (conteúdo e tipo)

//estrutura
//if-else
if (resultado >=18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//for
for (let i=0; i< 5; i++){
    console.log("iteração: " + i);
}
//while
 var contador = 0;
 while (contador <5) {
    console.log("Contador: " + contador);
    contador++;
 }

 //switch-case
 let op = 2;
 switch (op) {
    case 1:
        console.log("Opção 1");
        break;
    case 2:
        console.log("Opção 2");
        break;
    default:
        console.log("Escolha uma opção válida");
 }

