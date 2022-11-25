/**
*@jest-environment jsdom
*/

import * as actualFunctions from "../ts/functions";
import * as functions from "../ts/main";
import { Todo } from "../ts/models/Todo";

describe("clearTodos test", () => {

  /* test("should call function clearTodos()", () => {
    //Arrange
    let spy = jest.spyOn(actualFunctions, "removeAllTodos").mockReturnValue();
    let todos: Todo[] = [new Todo ("Test", true), new Todo ("Test2", false)];
    //Act
    functions.clearTodos(todos);
    //Assert
    expect(spy).toHaveBeenCalled();
  }); */

  /* test("should call function createHtml", () => {
    //Arrange
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    let todos: Todo[] = [new Todo ("Test", true), new Todo ("Test2", false)];
    //Act
    functions.clearTodos(todos);
    //Assert
    expect(spy).toHaveBeenCalled();
  }) */
})

/* test("should createHtml", () => {
  //Arrange
  //Act
  //Assert
}); */

describe("displayError test", () => {
  test("should add HTML to div", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="error" class="error"></div>`;
    let error: string = "Error Message";
    let show: boolean = true;

    //Act
    functions.displayError(error, show);

    //Assert
    expect((document.getElementById("error") as HTMLDivElement).innerHTML).toBe("Error Message");
  });

  test("should add class to div", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="error" class="error"></div>`;
    let error: string = "Error Message";
    let show: boolean = true;

    //Act
    functions.displayError(error, show);

    //Assert
    expect((document.getElementById("error") as HTMLDivElement).classList.length).toBe(2)
  });

  test("should not add class to div", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="error" class="error"></div>`;
    let error: string = "Error Message";
    let show: boolean = false;

    //Act
    functions.displayError(error, show);

    //Assert
    expect((document.getElementById("error") as HTMLDivElement).classList.length).toBe(1)
  });
});

describe("createNewTodo", () => {

  test("Should create HTML for Todo", () => {
    //Arrange
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    let todoText: string = "testText";
    let todos: Todo[] = [new Todo("Test", false)];
    //Act
    functions.createNewTodo(todoText, todos);
    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("Should not create HTML for Todo", () => {
    //Arrange
    let spy = jest.spyOn(functions, "displayError").mockReturnValue();
    let todoText: string = "Te";
    let todos: Todo[] = [new Todo("Test", false)];

    //Act
    functions.createNewTodo(todoText, todos);

    //Assert
    expect(spy).toBeCalledTimes(1);
  });
});

test("should be able to submit", () => {
  let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
  document.body.innerHTML = `
  <form id="newTodoForm">
    <div>
      <input type="text" id="newTodoText" />
      <button>Skapa</button>
    </div></form>`;
  let todos: Todo[] = [new Todo("test", false)];
  let text = "Test";
  functions.init();

  // Act
  document.querySelector("button")?.click();

  // Assert
  expect(spy).toHaveBeenCalled();
});

describe("toggleTodo test", () => {
  test("should call function changeTodo()", () => {
    //Arrange
    let spyOnFunctionA = jest.spyOn(actualFunctions, "changeTodo").mockReturnValue();

    let todo = new Todo("Test", false);
    //Act
    actualFunctions.changeTodo(todo);

    //Assert
    expect(spyOnFunctionA).toHaveBeenCalled();
  });

  test("should call function createHtml()", () => {
    //Arrange
    let spyOnFunctionB = jest.spyOn(functions, "createHtml").mockReturnValue();
    let todos: Todo[] = []
    //Act
    functions.createHtml(todos);

    //Assert
    expect(spyOnFunctionB).toHaveBeenCalled();
  });
})

test("should be able to click", () => {
  //Arrange
  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
  functions.init();

  //Act
  document.getElementById("clearTodos")?.click();

  //Assert
  expect(spy).toHaveBeenCalled();
});

