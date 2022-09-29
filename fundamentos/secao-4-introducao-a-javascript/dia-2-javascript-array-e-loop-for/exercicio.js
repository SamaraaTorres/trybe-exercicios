let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Percorra o array imprimindo todos os valores nele contidos com a função console.log()

for (let index = 0; index < numbers.length; index = index + 1) {
    console.log(numbers[index])
}

//Some todos os valores contidos no array e imprima o resultado;

let soma = 0
for (let indice = 0; indice < numbers.length; indice = indice + 1) {
    soma = soma + numbers[indice];
}
console.log(soma)

//Calcule e imprima a média aritmética dos valores contidos no array;

let media = soma/numbers.length
console.log(media)

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {console.log("valor maior que 20");
} else {console.log('valor menor ou igual a 20');
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = 0

for (let valor = 0; valor < numbers.length; valor = valor + 1) { if (numbers[valor] > maiorValor ) {
    maiorValor = numbers[valor];
}
}

console.log(maiorValor)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let numerosimpares = 0

for (let numeros = 0; numeros < numbers.length; numeros = numeros + 1) {
    if (numbers[numeros] % 2 !== 0) {
        numerosimpares = numerosimpares + 1
} 
}

if (numerosimpares !== 0) {
    console.log(numerosimpares);
} else {
    console.log("nenhum valor impar encontrado");
}

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i = i + 1) {
    if (numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}

console.log(menorValor)


//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = []
for (let numberArray = 1; numberArray <= 25; numberArray = numberArray + 1) {
    array.push(numberArray);
}
console.log(array)


//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.