//crie um algoritmo que imprima na tela o fatorial de 10.
let numero = 10;
let multiplicacao = '1';
let resultado = 1;
let x = ' x ';
let fatorial = '';
for (let numeros = 2; numeros <= numero; numeros += 1) {
    resultado = resultado * numeros
    multiplicacao = numeros + x + multiplicacao
}
fatorial = numero + "! = " + multiplicacao + ' = ' + resultado 
console.log(fatorial)

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let palavra = 'banana';
let palavraIvertida = '';
for (let letra = palavra.length - 1; letra >= 0;letra -= 1 ) {
    palavraIvertida = palavraIvertida + palavra[letra];
}
console.log(palavraIvertida);

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]
let menorPalavra = array[0]
for (index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
} 
console.log(menorPalavra, maiorPalavra);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
let numeros = 50;
numerosPrimos = [];
for (let number = 2; number <= numeros; number += 1) {
    let numeroPrimo = true
    for (let divisor = 2; divisor < number; divisor += 1) {
        if (number % divisor === 0) {
            numeroPrimo = false
        }
    }
    if (numeroPrimo === true) {
        numerosPrimos.push(number)
    }
}
let maiorNumero = numerosPrimos[0];
for (let index = 0; index < numerosPrimos.length; index += 1) {
    if (numerosPrimos[index] > maiorNumero) {
        maiorNumero = numerosPrimos[index];
    }
}
console.log(maiorNumero)