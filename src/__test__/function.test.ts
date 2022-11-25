import { changeTodo } from "../ts/functions";
import { removeAllTodos } from "../ts/functions";
import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should toggle boolean", () => {
  //Arrange
  let testTodo = new Todo("Hello", true);

  //Act
  changeTodo(testTodo);

  //Assert
  expect(testTodo.done).toBe(false);
});

test("should remove todos from list", () => {
  //Arrange
  let testTodo = new Todo("Hello", true);
  let todos: Todo[] = [testTodo];
  todos.push(testTodo);

  //Act
  removeAllTodos(todos);

  //Assert
  expect(todos.length).toBe(0);
});

test("should add object to list", () => {
  //Arrange
  let todos: Todo[] = [];
  let textUserWrites: string = "Hello";

  //Act
  addTodo(textUserWrites, todos);

  //Assert
  expect(todos.length).toBe(1);
});

test("should not add object to list", () => {
  //Arrange
  let todos: Todo[] = [];
  let textUserWrites: string = "He";

  //Act
  addTodo(textUserWrites, todos);

  //Assert
  expect(todos.length).toBe(0);
});
