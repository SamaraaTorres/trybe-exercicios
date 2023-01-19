//Game Actions Simulator

//Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status e, ao final, retornam os resultados da rodada.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

//Crie uma função que retorne o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () =>  {
  const minDamge = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDamge ? maxDmg : minDamge;
  return dragonDmg;
}


//Crie uma função que retorne o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDmg = () => {
  const strength = warrior.strength;
  const maxDmg = strength * warrior.weaponDmg
  const damage = Math.floor(Math.random() * maxDmg);
  const totalDamage = damage < strength ? strength : damage;
  return totalDamage; 
}

//Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
//O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
//A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageDmg = () => {
  const { mana, intelligence } = mage;
  const maxDmg = intelligence * 2;
  const random = Math.floor(Math.random() * maxDmg );
  const totalDamage = random < intelligence ? intelligence : random; 
  const totalMana = mana < 15 ? 0 : 15;
  const attack = {
    damage: totalDamage,
    mana: totalMana,
  }
  
  if (mana < 0 ) {
    attack.damage = 'Não possui mana suficiente';
    return attack;
  }

  return attack;
}

/*Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo, e cada ação é por definição uma HOF, pois, nesse caso, são funções que recebem como parâmetro outra função.

Copie o código abaixo e inicie sua implementação:*/

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (attack) => {
    dragon.healthPoints -= attack;
    warrior.damage = attack;
  },
  mageTurn: (attack) => {
    dragon.healthPoints -= attack.damage;
    mage.damage = attack.damage;
    mage.mana -= attack.mana;
  },
  dragonTurn: (attack) => {
    mage.healthPoints -= attack;
    warrior.healthPoints -= attack;
    dragon.damage = attack;
  },
  result: () => battleMembers,
};


gameActions.mageTurn(mageDmg());
gameActions.warriorTurn(warriorDmg());
gameActions.dragonTurn(dragonDamage());
console.log(gameActions.result());