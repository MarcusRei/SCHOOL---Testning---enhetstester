import { changeTodo } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("should toggle boolean", () => {
    //Arrange
    let testTodo = new Todo("Hello", true);

    //Act
    changeTodo(testTodo);

    //Assert
    expect(testTodo.done).toBe(false);
});