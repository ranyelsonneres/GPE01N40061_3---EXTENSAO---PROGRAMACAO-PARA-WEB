//criar um elemento via javascript
//eventos (propriedades)
//atividade

//criar um elemento
let destino = document.getElementById("elemento");
let p1 = document.createElement("p");
p1.textContent = "Paragrafo criado via JavaScript";
destino.append(p1);

let ul = document.createElement("ul");
let itens = ["item 1", "item 2", "item 3", "item 4"];
for (let i=0; i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
destino.append(ul); 

//eventos
let botao1 = document.getElementById("botao1");
console.log(botao1);

//clique simples
botao1.onclick = function(){
    //lógica de negócio
    console.log("Clique simples");
    alert("Clique Simples");
}

let botao2 = document.getElementById("botao2");
botao2.ondblclick = function(){
    console.log("Duplo clique");
}

botao2.onmouseover = function(){
    console.log("Registro");
}

botao2.onmouseout = function(){
    console.log("Registro de saída");
}

//evento - teclado
let campoEntrada = document.getElementById("input");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("Pressionou uma tecla Enter");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
    
}
let botao3 = document.getElementById("botao3");
botao3.onclick = function(){
    resultado.textContent = "";
}
