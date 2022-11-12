//Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

module.exports = myRemove