//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista;
let ul;


function adicionarAmigo() {

    let valorCampo = document.querySelector("input").value;

    
    if (valorCampo==""){
        alert("Por favor, insira um nome");
       
    }   
    
    else if(amigos.includes(valorCampo))    {
        alert("Digite outro nome")
    }

    else    {
            amigos.push(valorCampo)
            for (let i = 0; i < amigos.length; i++) {
                lista = document.getElementById("listaAmigos")
                ul = document.createElement('ul');
                ul.textContent=amigos[i];
            }
        lista.appendChild(ul);
        console.log(amigos)
            
        document.querySelector("input").focus();
        document.querySelector("input").value = "";

    }
}

function sortearAmigo()  {
lista.innerHTML = "";
let indiceDoNomeSorteado = parseInt(Math.random() * amigos.length);
console.log(indiceDoNomeSorteado);
let nomeSorteado = document.getElementById("resultado");
nomeSorteado.innerHTML = "O nome sorteado é " + amigos[indiceDoNomeSorteado];
}