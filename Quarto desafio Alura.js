console.log('boas-vindas.');
let nome = 'Andrey';
console.log(`Olá, ${nome}!`);
alert(`Olá, ${nome}!`);
let resposta = prompt('Qual a linguagem de programação que você mais gosta?');
let valor1 = 4;
let valor2 = 9;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
valor1 = 4;
valor2 = 9;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
let idade = prompt('Digite sua idade');
if(idade >= 18){
    console.log('É de maior');
}
else{
    console.log('É de menor');
}
let numero = prompt('Digite um número');
if(numero > 0){
    alert('número positivo');
}
else if(numero < 0){
    alert('número negativo');
}
else{
    alert('número 0');
}
numero = 0;
while(numero <= 10){
    console.log(numero);
    numero++;
}
let nota = 4;
if(nota > 7){
    console.log('aprovado');
}
else if(nota < 7){
    console.log('reprovado');
}
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
numeroAleatorio = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio);
numeroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio);