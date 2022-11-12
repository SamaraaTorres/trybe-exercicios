//Nova pessoa contratada: Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const person = nomeCompleto => {
    const email = `${nomeCompleto}@trybe.com`.split(' ').join('_')
    return { nomeCompleto, email }
}

const newEmployees = (funtion) => {
    const employees = {
        id1: funtion('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: funtion('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: funtion('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(person))

//Sorteador de loteria: Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente“ ou “Parabéns você ganhou”).

const checkNumbers = aposta => {
    const number = Math.floor(Math.random() * 5) + 1;
    if (number === aposta) {
        return "Parabéns você ganhou"
    }
    return "Tente novamente"
}

const Sorteador = (aposta, callback) => {
    return callback(aposta);
}

console.log(Sorteador(5, checkNumbers))

//Corretor automático de exame: Crie uma HOF que receberá três parâmetros. Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (solucao, resposta) => {
    let pontos = 0
    for (let index in solucao) {
        if (resposta[index] === solucao[index] ) {
            pontos += 1
        } else if (resposta[index] === 'N.A') {
            pontos = pontos
        } else {
            pontos -= 0.5
        }
    }
    return pontos;
}

const corretor = (solucao, resposta, callback) => {
    return callback(solucao, resposta);
}

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaRespostas))


