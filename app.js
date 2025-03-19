//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "" || ! isNaN(nome)){
        alert ("por favor, insira um nome valido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("istaAmigos");
    (lista.innerHTML = ""),
    amigos.forEach((amigos, index) => {
        const li = document.createElement("li");
        li.textContent = amigo + (index < amigos.lenght - 1 ? "," : "");
        lista.appendChild (li);
    )}
}

function sortearAmigo() {
    if (amigos.lenght === 0) {
        alert ("A lista de amigos esta vazia.");
        return;
     }

 if (amigos.lenght <= 2) {
      alert (" para poder realizar o sorteio, é preciso ter três amigos ou mais.");
       return;
 }

 let indiceSorteado = Math.floor(math .random() * amigos.length);

 let amigoSorteado = amigos [indiceSorteado];

 sorteados.push(amigoSorteado);

  const resultado = document.getElementById("resultado");
 resultado.innerHTML = "O amigo secreto sorteado é: " + sorteados;

 dispararConfete();

 sorteados = [];

 atualizarLista();
}
 
 function dispararConfete() {
     var count = 200
     var defaults = {
      origin: (y: 0 , 7),
};

    function fire(particleRatio, opts) {
     confetti({
         ...defaults,
         ...opts,
          particleCount: Math.floor(count * particleRatio),  
         }};