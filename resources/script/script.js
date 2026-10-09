//ATIVIDADE1
//  let numero = Number (prompt ("Digite um número: "))

// if (numero == 0 ){
//     alert ("Número invalido!")
// }

// else if(numero < 0 ){
// alert("esse numero é negativo!")
// }

// else{
//     alert("Esse número é positivo!")
// }


//ATIVIDADE2 
// let num = Number (prompt("Digite um número: "))
// if (num >0 ){
//     alert ("Esse número é positivo " .concat(num));
// }
// else if (num === 0){
//     alert ("O número é nulo " .concat(num));

// }
// else {
//     alert ("O número é negativo" .concat(num));
// }

// let num = Number (prompt ("Digite um número: "))

// if (num % 2=== 0){
// alert ("Esse número é par: " .concat(num));
// }
// else if (num % 2 !== 0){
//     alert("Esse número é ímpar: " .concat(num));
// }
// else{
//     alert ("Esse número é inválido! ")
// }
// let nome = "ingridy";

// let nomes =[
//     "Ingridy", "Gabriely", "Almeida"
// ];

// console.log (nomes)

// nomes [3] = "Laureano";  --> para adicionar uma info quando se sabe o tamanho dela.
// console.log (nomes) --> para ver a lista.
// console.log (nomes.length) --> para saber o tamanho da lista.
// nomes.push("Laureano") --> quando não se sabe a numeração e precisa adicionar uma info. É adicionado no final da lista.
// nomes.pop() --> remove do final.
// nomes.unshift(nomes) --> para adicionar uma info no início da lista.
// nomes.shift(nomes) --> para remover uma info do início.


let frutas = [
    "Maça", "Pera", "Abacate", "Limão", "Banana"
]


frutas.shift (0);
frutas.shift (1);
frutas.push("Kiwi", "Melancia", "Acerola");
console.log (frutas)
