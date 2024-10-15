const tasks = JSON.parse(localStorage.getItem('tasks')) || [
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

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskItem(task) {
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

  button.addEventListener('click', () => {
    const index = tasks.indexOf(task);
    if (index > -1) {
      tasks.splice(index, 1);
      saveTasksToLocalStorage();
      renderElements(tasks);
    }
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

  taskArray.forEach((task) => {
    const taskItem = createTaskItem(task);
    ul.appendChild(taskItem);
  });
}

function addNewTask() {
  const titleInput = document.querySelector("#task-title");
  const typeInput = document.querySelector("#task-type");

  const title = titleInput.value.trim();
  const type = typeInput.value;

  if (title === "" || type === "") {
    alert("Por favor, preencha os campos corretamente.");
    return;
  }

  const newTask = { title: title, type: type };
  tasks.push(newTask);
  saveTasksToLocalStorage();
  renderElements(tasks);

  titleInput.value = "";
  typeInput.value = ""; 
}

document.querySelector("#add-task-button").addEventListener("click", addNewTask);

renderElements(tasks);