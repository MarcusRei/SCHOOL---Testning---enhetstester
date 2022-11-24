/**
 *@jest-environment jsdom
 */

import * as functions from "../ts/main";
import { Todo } from "../ts/models/Todo";

test("should create new todo", () => {
  //Arrange
  let testList: Todo[] = [];
  let testText: string = "Hello";

  //Act
  functions.createNewTodo(testText, testList);
  //Assert
});

test("should createHtml", () => {
  //Arrange
  //Act
  //Assert
});

test("should toggle todo", () => {
  //Arrange
  //Act
  //Assert
});

test("should display error", () => {
  //Arrange
  //Act
  //Assert
});
