/*var nome = "Amanda";
//alert("Bem vinda " + nome);
console.log(nome);
//alert(("Bem vinda " + nome.replace("Amanda", "Maria")).toUpperCase());

var lista = ["maçã", "pêra", "abacaxi"];
console.log(lista[1]);
lista.push("laranja");
console.log(lista);
lista.pop();
//console.log(lista.length);
//console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta);

var frutas = [{nome:"melancia", cor:"verde"}, {nome:"uva", cor:"verde"}, {nome:"blueberry", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
var idade = 23;
if(idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
idade = prompt("Qual sua idade?");
var count = 0;
/*while(count < 5){
    console.log(count);
    count++;
};
for(count = 0; count <= 5; count++){
    console.log(count);
};
var d = new Date(); 
console.log(d); 
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5,10));*/
function botao(){
    //alert("Obrigada por clicar");
    document.getElementById("agradecimento").innerHTML="<b> Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    //window.open("https://translate.google.com.br/?hl=pt-BR");
    window.location.href = "https://translate.google.com.br/?hl=pt-BR";
}
function trocar(elemento){
    //document.getElementById("passemouse").innerHTML="Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("passemouse").innerHTML="Passe o mouse";
    elemento.innerHTML = "Passe o mouse";
}
function load(){
    alert("Página carregada");
}
function funcaoChange(element){
    console.log(element.value);
}