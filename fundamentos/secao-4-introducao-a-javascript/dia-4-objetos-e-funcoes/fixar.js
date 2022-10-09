//Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}
//Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
for (let person in names) {
    console.log(names[person]);
}

//Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key, car[key]);
  }
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
function adicao(a, b) {
    let soma = a + b; 
}
function subtracao(a, b) {
    let subitrai = a - b;
}
function multiplcacao(a, b) {
    let multiplica = a * b;
}
function divisao(a, b) {
    let divide = a / b;
}
function modulo(a, b) {
    let resto = a % b;
}
//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
function maiorValor(valor1, valor2) {
    if (valor1 > valor2) {
        console.log(valor1);
    } else {
        console.log(valor2);
    }
}

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorValorDeTres(valor1, valor2, valor3) {
    if (valor1 > valor2 && valor1 > valor3) {
        console.log(valor1);
    } else if (valor2 > valor1 && valor2 > valor3) {
        console.log(valor2);
    } else {
        console.log(valor3);
    }
}
