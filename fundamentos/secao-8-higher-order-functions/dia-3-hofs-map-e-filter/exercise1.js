const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = () => {
  // escreva seu código aqui
  const info = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
  return info;
}

//Crie um array com strings no formato NOME_DA_PESSOA_AUTORA - DATA DE NASCIMENTO

const formatedAuthorNamesBirth = () => {
  // escreva seu código aqui
  const authorInfo = books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
  return authorInfo
}


//Construa um array de objetos a partir do array de livros.
//Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha.

const nameAndAge = () => {
  // escreva seu código aqui

  books.sort((a, b) => {
    const aAge = a.author.birthYear - 2022;
    const bAge = b.author.birthYear - 2022;
    return bAge - aAge
  })

  const authorResult = books.map((book) => ({
    author: book.author.name,
    age: 2022 - book.author.birthYear,
  }))

  return authorResult
}

//Filtre todos os objetos do gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = () => {
  // escreva seu código aqui
  const filterBooks = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia' );
  return filterBooks
}
  
//Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.

const oldBooksOrdered = () => {
  // escreva seu código aqui
  const filterRelease = books.filter((book) => 2022 - book.releaseYear > 60);
  filterRelease.sort((a, b) => a.releaseYear - b.releaseYear);
  return filterRelease;
}

//Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksByAuthorBirthYear = (birthYear) => {
  // escreva seu código aqui
  const ageBooks = books.filter((book) => book.author.birthYear === birthYear);
  const allBooks = ageBooks.map((book) => book.name);
  return allBooks 
}
const result = booksByAuthorBirthYear(1920);
