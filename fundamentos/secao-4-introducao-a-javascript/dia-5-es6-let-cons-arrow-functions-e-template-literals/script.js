// Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
const pessoa = {
    nome: 'Henri',
    idade: 20
}
pessoa.nome = 'Luna'
pessoa['idade'] = '19'

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

//Modifique a estrutura das funções a seguir para que elas sejam arrow functions
const numeroAleatorio = () => Math.random()

console.log(numeroAleatorio());

//Transforme a função hello em uma arrow function
const hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));

//Transforme a função nomeCompleto em uma arrow function
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));