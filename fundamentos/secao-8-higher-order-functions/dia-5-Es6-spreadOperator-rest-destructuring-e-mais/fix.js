//Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const saladItens = [...fruit, ...additional];
  return saladItens
};

//Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {...user, ...jobInfos};

//Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const { name, age, nationality, profession, squad, squadInitials } = userInfos;

console.log(`Hi, my name is ${name} , I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)

//Do jeito que está, quando person é passado para a função getNationality, o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

