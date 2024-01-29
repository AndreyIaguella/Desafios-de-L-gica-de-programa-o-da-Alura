function olaMundo(){
    console.log('Olá, mundo!');
}

olaMundo();

//__________________________________________

function olaNome(){
    let nome = 'Andrey'
    return nome;
}

let nome = olaNome();

function exibirNome(nome){
    console.log(`Olá, ${nome}!`);
}

exibirNome(nome);

//__________________________________________

function recebe(){
    let numero = 5;
    return numero;
}

let numero = recebe();

function dobroDoNumero(numero){
    let dobro = numero * 2;
    return dobro;
}

let dobro = dobroDoNumero(numero);
console.log(`${dobro}`);

//__________________________________________

function recebeNumero1(){
    let numero = 5;
    return numero;
}

function recebeNumero2(){
    let numero = 5;
    return numero;
}

function recebeNumero3(){
    let numero = 5;
    return numero;
}

let numero1 = recebeNumero1();
let numero2 = recebeNumero2();
let numero3 = recebeNumero3();

function media(numero1, numero2, numero3){
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
}

let media = media(numero1, numero2, numero3);
console.log(`${media}`);

//__________________________________________

function recebeNumeroDeComparacao(){
    let numero = 5;
    return numero;
}

function recebeNumeroDeComparacao2(){
    let numero = 5;
    return numero;
}

let numeroComparacao1 = recebeNumeroDeComparacao();
let numeroComparacao2 = recebeNumeroDeComparacao2();

function comparacao(numeroComparacao1, numeroComparacao2){
    if(numeroComparacao1 > numeroComparacao2){
        return numeroComparacao1;
    }
    else{
        return numeroComparacao2;
    }
}

let numeroComparado = comparacao(numeroComparacao1, numeroComparacao2);
console.log(`${numeroComparado}`);

//__________________________________________

function recebeNumeroElevado(){
    let numero = 5;
    return numero;
}

let numeroElevado = recebeNumeroElevado();

function numeroElevadoAoQuadrado(numeroElevado){
    let quadrado = numeroElevado * numeroElevado;
    return quadrado;
}

let numeroJaElevado = numeroElevadoAoQuadrado(numeroElevado);
console.log(`${numeroJaElevado}`);