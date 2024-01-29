let diaDaSemana = prompt('Digite o dia da semana');
if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
    alert('Bom fim de semana!');
}else{
    alert('Boa semana!');
}
let numero = prompt('Digite um número');
if(numero < 0){
    alert('número negativo');
}else{
    alert('número positivo');
}
let pontuacao = 100;
if(pontuacao < 100){
    alert('Tente novamente para ganhar.');
}else{
    alert('Parabéns, você venceu!');
}
let saldo = 1000;
alert(`Seu saldo atual é de: R$${saldo}`);
let nome = prompt('Digite seu nome');
alert(`boas-vindas ${nome}`);