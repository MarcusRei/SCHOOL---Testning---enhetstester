import { addTodo, changeTodo, removeAllTodos } from "./functions";
import { Todo } from "./models/Todo";
//Hämtar listan från LS
let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

//Lägger till klick på rensa listan
document.getElementById("clearTodos")?.addEventListener("click", () => {
  clearTodos(todos);
});

//Lägger till submit-händelsen och loggar listan
(document.getElementById("newTodoForm") as HTMLFormElement)?.addEventListener(
  "submit",
  (e: SubmitEvent) => {
    e.preventDefault();

    let todoText: string = (
      document.getElementById("newTodoText") as HTMLInputElement
    ).value;
    console.log("Todos when creating", todos);

    createNewTodo(todoText, todos);
  }
);

function createNewTodo(todoText: string, todos: Todo[]) {
  let result = addTodo(todoText, todos);

  if (result.success) {
    createHtml(todos);
  } else {
    displayError(result.error, true);
  }
}

function createHtml(todos: Todo[]) {
  //Lägger listan på LS
  localStorage.setItem("todos", JSON.stringify(todos));

  let todosContainer: HTMLUListElement = document.getElementById(
    "todos"
  ) as HTMLUListElement;

  todosContainer.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let li: HTMLLIElement = document.createElement("li");
    //Kollar om todon är avklarad
    if (todos[i].done) {
      li.classList.add("todo__text--done");
    }

    li.classList.add("todo__text");
    li.innerHTML = todos[i].text;
    //Lägger till klick och togglar .done
    li.addEventListener("click", () => {
      toggleTodo(todos[i]);
    });

    todosContainer.appendChild(li);
  }
}

export function toggleTodo(todo: Todo) {
  changeTodo(todo);
  createHtml(todos);
}

function displayError(error: string, show: boolean) {
  let errorContainer: HTMLDivElement = document.getElementById(
    "error"
  ) as HTMLDivElement;

  errorContainer.innerHTML = error;

  if (show) {
    errorContainer.classList.add("show");
  } else {
    errorContainer.classList.remove("show");
  }
}

function clearTodos(todos: Todo[]) {
  removeAllTodos(todos);
  createHtml(todos);
}

createHtml(todos);
