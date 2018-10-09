let lista = [];
let item = {};
let nomepromp;
let precopromp;
let qtdpromp;

let valorfinal=0;

function newitem() {


    nomepromp = prompt("Digite o item:","Batata");
    precopromp = prompt("Digite o valor do item:","1.00R$");
    qtdpromp = prompt("Digite a quantidade que deseja comprar:","100");
    item.nome = nomepromp;
    item.preco = precopromp;
    item.qtd = qtdpromp;
    lista.push(item);
    valorfinal = valorfinal + (item.preco*item.qtd);
    document.getElementById("valor-total").innerHTML = valorfinal.toString();
    showlist(item);

}




function showlist(obj) {

    let temppnome = document.createElement("p");
    let temptextnome = document.createTextNode(obj.nome.toString());
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
//
// // function refresh(obj) {
// //         showlist(obj);
// // }
