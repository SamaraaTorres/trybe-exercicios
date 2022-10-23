function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

const daysUl = document.querySelector('#days');
function days() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const createLi = document.createElement('li');
        createLi.innerText = decemberDaysList[index];
        createLi.classList.add('day');
        daysUl.appendChild(createLi);
    }
}
days()

function diasFeriado() {
    const lista = document.querySelectorAll('li');
    for (let index = 0; index < lista.length; index += 1) {
        const dia = lista[index].innerText;
        if (dia === '24' || dia === '25' || dia === '31') {
            lista[index].classList.add('holiday');
        }
    }
}
diasFeriado()

function diasSexta() {
    const lista = document.querySelectorAll('li');
    for (let index = 0; index < lista.length; index += 1) {
        const dia = lista[index].innerText;
        if (dia === '4' || dia === '11' || dia === '18' || dia === '25') {
            lista[index].classList.add('friday');
        }
    }
}
diasSexta()

function criaBotao(nome) {
    const buttonsContainer = document.querySelector('.buttons-container')
    const botao = document.createElement('button');
    botao.innerText = nome;
    botao.id = 'btn-holiday';
    buttonsContainer.appendChild(botao);
}

criaBotao('Feriados');

const botaoHoliday = document.querySelector('#btn-holiday');

function mudarCorFeriados() {
    const holiday = document.querySelectorAll('.holiday');
    for (let index = 0; index < holiday.length; index++) {
        if (holiday[index].style.color === 'red') {
            holiday[index].style.color = '#777';
        } else {holiday[index].style.color = 'red'};
    }
}

botaoHoliday.addEventListener('click', mudarCorFeriados);

function criaBotaoSexta(nome) {
    const buttonsContainer = document.querySelector('.buttons-container')
    const botao = document.createElement('button');
    botao.innerText = nome;
    botao.id = 'btn-friday';
    buttonsContainer.appendChild(botao);
}

criaBotaoSexta('Sexta-feira')

function mudaSexta() {
    const friday = document.querySelectorAll('.friday');
    for (let index = 0; index < friday.length; index++) {
        if (friday[index].style.backgroundColor !== 'yellow') {
            friday[index].style.backgroundColor = 'yellow';
        } else {
            friday[index].style.backgroundColor = '';
        }
    }
}

const botaoFriday = document.querySelector('#btn-friday');

botaoFriday.addEventListener('click', mudaSexta);

function zoom(event) {
    event.target.style.fontSize = '45px';
}

function retiraZoom(event) {
    event.target.style.fontSize = '20px';
}

const dias = document.querySelectorAll('.day');
for (let index = 0; index < dias.length; index += 1) {
    dias[index].addEventListener('mouseover', zoom);
    dias[index].addEventListener('mouseleave', retiraZoom);
}

function criaTarefas(tarefa) {
    const span = document.createElement('span');
    span.innerText = tarefa;
    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(span);
}


function legendaTarefa(cor) {
    const div = document.createElement('div');
    div.className = 'task';
    const myTasks = document.querySelector('.my-tasks');
    myTasks.appendChild(div);
    const task = document.querySelector('.task')
    task.style.backgroundColor = cor
}
