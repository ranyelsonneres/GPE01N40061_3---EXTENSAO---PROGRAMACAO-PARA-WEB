//buscar um elemento HTML
let elemento = document.getElementById("paragrafo"); //odemtofocação
console.log(typeof elemento);
console.log(elemento.textContent);

//busca por classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);

for (let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

//buscar pela tag
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//algoritmo: entrada + processamento + saída
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    let saida = `<strong>Resultado:</strong> ${soma}`;
    document.getElementById("resultado").innerHTML = saida;
}
