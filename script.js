const tasks = [
  { title: "Comprar comida para o gato", type: "urgente" },
  { title: "Consertar Computador", type: "importante" },
  { title: "Beber água", type: "normal" },
  { title: "Enviar relatório trimestral", type: "importante" },
  { title: "Fazer exercícios físicos", type: "normal" },
  { title: "Agendar consulta médica", type: "urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "normal" },
  { title: "Limpar a despensa", type: "importante" },
  { title: "Pagar a conta de energia", type: "urgente" },
  { title: "Assistir a um documentário interessante", type: "normal" },
];

function createTaskItem(task, index) {
  const li = document.createElement('li');
  li.className = 'task__item';

  const div = document.createElement('div');
  div.className = 'task-info__container';

  const span = document.createElement("span");
  span.classList.add("task-type");

  if (task.type === "urgente") {
    span.classList.add("span-urgent");
  } else if (task.type === "importante") {
    span.classList.add("span-important");
  } else if (task.type === "normal") {
    span.classList.add("span-normal");
  }

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
    console.log(`Adicionando tarefa: ${task.title} com tipo: ${task.type}`); // Log para depuração
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
      type: type.toLowerCase() // Armazena sempre como minúscula
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
