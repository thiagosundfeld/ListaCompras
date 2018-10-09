let lista = [];
let item = {};

let valorfinal=0;

function newitem() {

    let nome;
    let preco;
    let qtd;
    nome = prompt("Digite o item:","Batata");
    preco = prompt("Digite o valor do item:","1.00R$");
    qtd = prompt("Digite a quantidade que deseja comprar:","100");
    item.nome = nome;
    item.preco = preco;
    item.qtd = qtd;
    lista.push(item);
    valorfinal = valorfinal + (item.preco*item.qtd);
    document.getElementById("valor-total").innerHTML = valorfinal.toString();
    refresh(item);

}
function refresh(obj) {
    lista.forEach(showlist(obj));

}

function showlist(obj) {

    let temppnome = document.createElement("p");
    let temptextnome = document.createTextNode(obj.nome);
    temppnome.appendChild(temptextnome);
    document.getElementById("lista-nome").appendChild(temppnome);

    let tempppreco = document.createElement("p");
    let temptextpreco = document.createTextNode(obj.preco.toString());
    tempppreco.appendChild(temptextpreco);
    document.getElementById("lista-preco").appendChild(tempppreco);

    let temppqtd = document.createElement("p");
    let temptextqtd = document.createTextNode(obj.qtd.toString());
    temppqtd.appendChild(temptextqtd);
    document.getElementById("lista-qtd").appendChild(temppqtd);
}
