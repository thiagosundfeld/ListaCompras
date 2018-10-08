let lista = new Array();
let item;
let nome;
let preco;
let qtd;

function newitem() {

    nome = prompt("Digite o item:","Desert Eagle");
    preco = prompt("Digite o valor do item:","1000.00R$");
    qtd = prompt("Digite a quantidade em estoque:","100");
    new item(nome,preco,qtd);
    lista.push(item);
}

function showlist() {

    let tempp = document.createElement("p");
    tempp = document.createTextNode();
}