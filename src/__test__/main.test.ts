/**
*@jest-environment jsdom
*/

import * as functions from "../ts/main";
import { Todo } from "../ts/models/Todo";

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

/* test("should be able to submit", () => {
  //Arrange
  let spy = jest.spyOn(functions, "createNewTodo");
  document.body.innerHTML = `<form id="newTodoForm">
    <div>
      <input type="text" id="newTodoText" />
      <button>Skapa</button>
      <button type="button" id="clearTodos">Rensa lista</button>
    </div>
    <div id="error" class="error"></div>
  </form>`;

  //Act
  document.getElementById("newTodoForm")?.click();

  //Assert
  expect(spy).toHaveBeenCalled();
}); */

/* test("should create new todo", () => {
  //Arrange
  let testList: Todo[] = [];
  let testText: string = "Hello";

  //Act
  functions.createNewTodo(testText, testList);
  //Assert
}); */

/* test("should createHtml", () => {
  //Arrange
  //Act
  //Assert
}); */

/* test("should toggle todo", () => {
  //Arrange
  //Act
  //Assert
}); */

describe("displayError", () => {
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