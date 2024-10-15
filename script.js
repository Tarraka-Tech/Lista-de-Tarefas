
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
  const li = document.createElement("li");
  li.classList.add("task__item");

  const div = document.createElement("div");
  div.classList.add("task-info__container");

  const span = document.createElement("span");
  span.classList.add("task-type");

  if (task.type === "urgente") {
    span.classList.add("span-urgent");
  } else if (task.type === "importante") {
    span.classList.add("span-important");
  } else if (task.type === "normal") {
    span.classList.add("span-normal");
  }

  const p = document.createElement("p");
  p.textContent = task.title;

  const button = document.createElement("button");
  button.classList.add("task__button--remove-task");
  button.innerHTML = '<i class="fas fa-trash"></i>';

  button.addEventListener("click", () => {
    removeTask(index);
  });

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  return li;
}

function renderElements(taskArray) {
  const ul = document.querySelector(".tasks__list");
  ul.innerHTML = "";

  taskArray.forEach((task, index) => {
    const taskItem = createTaskItem(task, index);
    ul.appendChild(taskItem);
  });
}

function addTask() {
  const taskTitleInput = document.querySelector("#task-title");
  const taskTypeSelect = document.querySelector("#task-type");

  // Captura os valores dos inputs
  const taskTitle = taskTitleInput.value.trim();
  const taskType = taskTypeSelect.value;

  if (taskTitle !== "" && taskType !== "") {
    const newTask = { title: taskTitle, type: taskType };
    tasks.push(newTask);

    renderElements(tasks);
    taskTitleInput.value = "";
    taskTypeSelect.value = "";
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderElements(tasks);
}

renderElements(tasks);

const addTaskButton = document.querySelector("#add-task-btn");
addTaskButton.addEventListener("click", addTask);