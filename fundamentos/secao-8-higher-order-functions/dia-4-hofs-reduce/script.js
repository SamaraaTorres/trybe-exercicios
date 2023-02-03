
const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

  //1 - Calcule a quantidade total da população de todos os países.

const getPopulation = () => {
  // retorne o seu código aqui
  const pop = countries.map((country) => country.population);
  const total = pop.reduce((acc, curr) => acc + curr, 0 );
  return total;
}

//2 - Calcule a área total de todos os países.

const getTotalArea = () => {
  // retorne seu código aqui
  const totalArea = countries.reduce((acc, curr) => acc + curr.area, 0 );
  return totalArea;
}

//🚀 3 - Encontre o país com o maior nome.

const longestName = () => {
  // retorne seu código aqui
  const name = countries.reduce((bigger, country) => {
        return bigger.name.length > country.name.length ? bigger : country;
    });

  return name;
}

//🚀 Crie um array de objetos e calcule a média de notas. Utilize as constantes students e grades para criar um array de objetos e calcule a média da nota das pessoas estudantes

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
  return nameAndAverage = students.map((student, index) => (
    {
    name: student,
    average:  grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }
  ));
}

console.log(studentAverage())