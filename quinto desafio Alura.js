let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function OBotãoFoiPressionado(){
    console.log('O Botão foi pressionado');
}

function EuAmoJS(){
    alert('Eu amo JS');
}

function cidade(){
    let city = prompt('Escreva o nome de uma cidade');
    alert(`Estive em ${city} e lembrei de você`);
}

function aumento(){
    let numero1 = prompt('escreva um número');
    let numero2 = prompt('escreva outro número');
    let numero3 = numero1 + numero2;
    alert(`O resultado é de ${numero3}`);
}