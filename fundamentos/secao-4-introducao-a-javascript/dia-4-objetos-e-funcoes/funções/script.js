//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindromo(nome) {
    let nomeInverso = '' ;
    for (let letra = 0; letra < nome.length; letra += 1) {
        nomeInverso =  nome[letra] + nomeInverso;
    }
    if (nomeInverso === nome) {
        let palindromo = true;
        console.log(palindromo);
    } else {
        let palindromo = false;
        console.log(palindromo);
    }
}
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorValorIndice (array) {
    let maiorNumero = array[0];
    let indice = 0
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maiorNumero) {
            maiorNumero = array[index];
            indice = index;
        }
    }
    console.log(indice)
}

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorValorIndice(array) {
    let menorValor = array[0];
    indice = 0
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] < menorValor) {
            menorValor = array[index];
            indice = index;
        }
    }
    console.log(indice)
}

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorNome(array) {
    let nome = array[0];
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > nome.length) {
            nome = array[index]
        }
    }
    console.log(nome);
}
