//definir os preços
const precoGasolina = 6.10;
const precoEtanol = 5.99;
const precoDiesel = 6.09;

//funções
function atualizaValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
    }
    console.log(precoPorLitro);
    let litros = document.getElementById("litros").value;

    //chamar uma função
    calcularAbastecimento(precoPorLitro, litros);
}

function calcularAbastecimento(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal;
} 

//chamar
let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizaValor);
//atualizaValor();

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizaValor);

//fazer uma função para formatar o valor final do abastecimento
//pesquise por toLocaleString
