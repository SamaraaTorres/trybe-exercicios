const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
const li = document.querySelectorAll('li');
function techClass(event) {
    event.target.className = 'tech'
}
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function techElement() {
    for (let index = 0; index < li.length; index += 1) {if (li[index].className = 'tech') { 
        li[index].className = '';
        }
    }
}

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alteraTexto() {
    const tech = document.querySelector('.tech');
    tech.innerText = input.value;
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;

function redireciona() {
    window.location.replace('https://blog.betrybe.com/')
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

function alteraCor(event) {
    event.target.style.color = 'red'
}

for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', techElement);
    li[index].addEventListener('click', techClass);
}
input.addEventListener('keyup', alteraTexto);
myWebpage.addEventListener('dblclick', redireciona);
myWebpage.addEventListener('mouseover', alteraCor);
myWebpage.addEventListener('mouseleave', function(event) {
    event.target.style.color = 'white';
})
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.