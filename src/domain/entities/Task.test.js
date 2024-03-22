import { Task } from "./Task";

describe("Testing Task entity", () => {
  test("When trying to create a Task Object with a negative id it throws : 'Task id should be positive or null' ", async () => {
    expect(() => {
      new Task({
        id: -1,
      });
    }).toThrowError("Task id should be positive or 0");
  });
  test("When trying to create a Task Object with an empty name it throws : 'Task name cannot be empty' ", async () => {
    expect(() => {
      new Task({
        id: 0,
        name: "",
      });
    }).toThrowError("Task name cannot be empty");
  });
  test("When trying to create a Task Object with a priority of 1 it throws : 'Task priority should be either low, medium or high' ", async () => {
    expect(() => {
      new Task({
        id: 0,
        name: "test",
        priority: 1,
      });
    }).toThrowError("Task priority should be either low, medium or high");
  });
  test("When the method snapshot of a Task object is called it returns an object with the same properties", async () => {
    const task = new Task({
      id: 1,
      name: "Test Task",
      dueDate: "2022-01-01",
      priority: "medium",
    });

    const snapshot = task.snapshot();

    expect(snapshot).toStrictEqual({
      id: 1,
      name: "Test Task",
      dueDate: "2022-01-01",
      priority: "medium",
    });
  });
});
