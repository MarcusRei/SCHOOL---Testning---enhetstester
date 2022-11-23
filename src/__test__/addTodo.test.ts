import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should add to list", () => {
    //Arrange
    let todos: Todo[] = [];
    let testText: string = "Hello";

    //Act
    addTodo(testText, todos);

    //Assert
    expect(todos.length).toBe(1);
});