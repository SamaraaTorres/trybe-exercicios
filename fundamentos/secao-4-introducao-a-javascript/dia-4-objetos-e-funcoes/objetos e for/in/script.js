let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome

console.log('Bem-vinda, ' + info['personagem']);
//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console

info['recorrente'] = 'sim';
console.log(info['recorrente']);

//Faça um for/in que mostre todas as chaves do objeto
for (let key in info) {
    console.log(key);
}

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto

for (let key in info) {
    console.log(info[key]);
}

//Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + leitor['livrosFavoritos'][0]['titulo']);

//Adicione um novo livro favorito na chave livrosFavoritos, que é um array.

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”
let quantidade = 1
for (numero = 1; numero <= leitor.livrosFavoritos.length; numero += 1) {
    quantidade = numero;
}
console.log(leitor['nome'] + ' tem ' + quantidade + ' livros favoritos');