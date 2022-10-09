//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 
let n = 5
let asterisco = ''
let quadrado = asterisco
for (let number = 1; number <= n; number += 1) {

    quadrado = quadrado + '*';
}
for (let number = 1; number <= n; number += 1) {
}

//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
let triangulo = asterisco
for (let number = 1; number <= n; number += 1) {
    triangulo = triangulo + '*';
}

//Agora inverta o lado do triângulo
let espaco = ''
let trianguloInvertido = asterisco
for (let number = n; number >= 1; number -= 1) {
    trianguloInvertido = trianguloInvertido + '*'
    espaco = ''
    for  (let imprimeEspaco = number - 1; imprimeEspaco > 0; imprimeEspaco -= 1 ) {
        espaco = espaco + ' ';
    }
    let inverte = espaco + trianguloInvertido
    console.log(inverte)
} 
