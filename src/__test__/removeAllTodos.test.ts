import { removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should remove todos from list", () => {
    //Arrange
    let testTodo = new Todo("Hello", true);
    let todos: Todo[] = [testTodo];

    //Act
    removeAllTodos(todos);

    //Assert
    expect(todos.length).toBe(0);
})