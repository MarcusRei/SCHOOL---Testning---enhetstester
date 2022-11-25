import { addTodo, changeTodo, removeAllTodos } from "./functions";
import { Todo } from "./models/Todo";
//Hämtar listan från LS
let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

//Lägger till klick på rensa listan
export function init() {
  document.getElementById("clearTodos")?.addEventListener("click", () => {
    exports.clearTodos(todos);
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

      exports.createNewTodo(todoText, todos);
    }
  );
}

init();

export function createNewTodo(todoText: string, todos: Todo[]) {
  let result = addTodo(todoText, todos);

  if (result.success) {
    exports.createHtml(todos);
  } else {
    exports.displayError(result.error, true);
  }
}

export function createHtml(todos: Todo[]) {
  //Lägger listan på LS
  localStorage.setItem("todos", JSON.stringify(todos));

  let todosContainer: HTMLUListElement = document.getElementById(
    "todos"
  ) as HTMLUListElement;

  //todosContainer.innerHTML = "";

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
      exports.toggleTodo(todos[i]);
    });

    todosContainer.appendChild(li);
  }
}

export function toggleTodo(todo: Todo) {
  exports.changeTodo(todo);
  exports.createHtml(todos);
}

export function displayError(error: string, show: boolean) {
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

export function clearTodos(todos: Todo[]) {
  exports.removeAllTodos(todos);
  exports.createHtml(todos);
}

//createHtml(todos);
