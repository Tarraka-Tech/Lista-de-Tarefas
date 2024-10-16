const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function createTaskItem(task, index) {
  const li = document.createElement('li');
  li.className = 'task__item';

  const div = document.createElement('div');
  div.className = 'task-info__container';

  const span = document.createElement('span');
  span.className = 'task-type'; 
  span.classList.add(`span-${task.type.toLowerCase()}`); 

  const p = document.createElement('p');
  p.textContent = task.title;

  div.appendChild(span);
  div.appendChild(p);

  const button = document.createElement('button');
  button.className = 'task__button--remove-task';
  button.innerHTML = '<i class="fas fa-trash"></i>';

  button.addEventListener('click', () => {
    tasks.splice(index, 1);
    renderElements(tasks);
  });

  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(tasks) {
  const ul = document.querySelector('.tasks__list');
  ul.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = createTaskItem(task, index);
    ul.appendChild(taskItem);
  });
}

function addTask(event) {
  event.preventDefault();

  const inputTitle = document.getElementById('input_title');
  const selectType = document.querySelector('.form__input--priority');

  const title = inputTitle.value.trim();
  const type = selectType.value.trim();

  if (title && type) {
    const newTask = {
      title: title,
      type: type.charAt(0).toUpperCase() + type.slice(1) // Garante que a primeira letra seja maiúscula
    };

    tasks.push(newTask);
    renderElements(tasks);

    inputTitle.value = '';
    selectType.value = '';
  }
}

const addButton = document.querySelector('.form__button--add-task');
addButton.addEventListener('click', addTask);

renderElements(tasks);