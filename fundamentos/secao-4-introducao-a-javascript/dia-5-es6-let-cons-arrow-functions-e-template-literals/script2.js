//Crie uma função que ligue e desligue um motor de um carro.
const motor = {
    status: 'desligado'
}
const ligarDesligar = () => (motor.status === 'ligado') ? motor.status = 'desligado' : motor.status ='ligado'

console.log(`O motor está ${ligarDesligar()}`);

// Crie uma função que calcule a área de um círculo.
const pi = 3.14
const area = raio => pi * raio ** 2
console.log(`Essa é a área do círculo: ${area(5)}`)

//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = frase => { 
    let palavras = frase.split(' '); 
    let maiorPalavra = palavras[0];
    for (let index = 0; index < palavras.length; index += 1) {
        if (palavras[index].length > maiorPalavra.length) {
            maiorPalavra = palavras[index];
        }
    } 
    console.log(maiorPalavra);
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')