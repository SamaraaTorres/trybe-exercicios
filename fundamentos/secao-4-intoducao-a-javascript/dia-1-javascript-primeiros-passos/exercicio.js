// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. 

const a = 12;
const b = 5;

console.log( a + b);
console.log( a - b);
console.log( a * b);
console.log( a / b);
console.log( a % b);

//Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

if (a > b) {console.log(a);
} else {console.log(b);
}

//Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const c = 34;

if (a > b && a > c) {console.log(a);
} else if (b > a && b > c) {console.log(b);
} else {console.log(c);
}

//Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

const valor = 0

if (valor > 0) {console.log("positive");
} else if (valor < 0) {console.log("negative");
} else {console.log('zero');
}

// Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

const anguloA = 45
const anguloB = -4
const anguloC = 90
let triangulo = null

if (anguloA + anguloB + anguloC === 180 && anguloA >= 0 && anguloB >= 0 && anguloC >= 0) {triangulo = true;
} else if (anguloA + anguloB + anguloC < 180 ||  anguloA + anguloB + anguloC > 180) {if (anguloA >= 0 && anguloB > 0 && anguloC >= 0) {triangulo = false;
} else {triangulo = "Ângulo inválido";
}
}

console.log(triangulo)

//Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = "Bispo";

switch (peca.toLowerCase()) {
    case  "peão":
        console.log("uma casa para frente");
        break;
    case  "bispo":
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("movimento em L");
        break;
    case "torre":
        console.log("vertical e horizontal");
        break;
    case "Rainha":
        console.log("vertical, horizontal e diagonal");
        break;
    case "Rei":
        console.log("uma casa em qualquer direção");
        break
    default:
        console.log("Peça inválida.")

}

//Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

const porcentagem = 60

if (porcentagem >= 90) {
    if (porcentagem > 0 && porcentagem < 100) {console.log("A");
} else {console.log("Erro");
}
} else if (porcentagem >= 80) {
    if (porcentagem > 0 && porcentagem < 100) {console.log("B");
} else {console.log("Erro");
}
} else if (porcentagem >= 70) {
    if (porcentagem > 0 && porcentagem < 100) {console.log("C");
} else {console.log("Erro");
}
} else if (porcentagem >= 60) {
    if (porcentagem > 0 && porcentagem < 100) {console.log("D");
} else {console.log("Erro");
}
} else if (porcentagem >= 50) {
    if (porcentagem > 0 && porcentagem < 100) {console.log("E");
} else {console.log("Erro");
}
} else if (porcentagem < 50) {
    if (porcentagem > 0 && porcentagem < 100) {console.log("F");
} else {console.log("Erro");
}
}
