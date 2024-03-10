import { TaskInteractor } from "./TaskInteractor";
import { faker } from "@faker-js/faker";

//Initialize mock repository and interactor
var mockTaskRepo = {};
var taskInteractor = {};

const mockProduct = () => {
  return {
    id: faker.number.int(1000),
    //There is no task Title in faker.js so we use jobTitle instead
    name: faker.person.jobTitle(),
    dueDate: String(faker.date.future()),
    priority: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
  };
};

class MockTaskRepository {
  async create(task) {
    return task;
  }

  async update(task) {
    return task;
  }

  async delete(id) {
    return "Task successfully deleted";
  }

  async get(id) {
    return [{ id: 1, name: "Task 1", dueDate: "demain", priority: "medium" }];
  }
}

beforeEach(() => {
  mockTaskRepo = new MockTaskRepository();
  taskInteractor = new TaskInteractor(mockTaskRepo);
});
afterEach(() => {
  mockTaskRepo = {};
  taskInteractor = {};
});

describe("Testing Task Interactor", () => {
  describe("CreateTask", () => {
    test("When a Task is successfully created it returns the Task object that has been created", async () => {
      const reqBody = mockProduct();
      const result = await taskInteractor.createTask(reqBody);
      expect(result).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        dueDate: expect.any(String),
        priority: expect.any(String),
      });
    });
    test("When there is no valid task object the interactor throws an error", async () => {
      const reqBody = mockProduct();

      jest.spyOn(mockTaskRepo, "create").mockImplementation(() => {
        return {};
      });

      await expect(taskInteractor.createTask(reqBody)).rejects.toThrow(
        "Unable to create a Task"
      );
    });
    test("When there an error from the repo we should be able to catch it", async () => {
      const reqBody = mockProduct();

      jest.spyOn(mockTaskRepo, "create").mockImplementationOnce(() => {
        throw new Error("Error from repo");
      });

      await expect(taskInteractor.createTask(reqBody)).rejects.toThrow(
        "Error from repo"
      );
    });
  });
  describe("UpdateTask", () => {
    test("When a Task is successfully updated it returns the Task object that has been updated", async () => {
      const reqBody = mockProduct();
      const result = await taskInteractor.updateTask(reqBody);
      expect(result).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        dueDate: expect.any(String),
        priority: expect.any(String),
      });
    });
    test("When there is no valid task object the interactor throws an error", async () => {
      const reqBody = mockProduct();

      jest.spyOn(mockTaskRepo, "update").mockImplementation(() => {
        return {};
      });

      await expect(taskInteractor.updateTask(reqBody)).rejects.toThrow(
        "Unable to update a Task"
      );
    });
    test("When there an error from the repo we should be able to catch it", async () => {
      const reqBody = mockProduct();

      jest.spyOn(mockTaskRepo, "update").mockImplementationOnce(() => {
        throw new Error("Error from repo");
      });

      await expect(taskInteractor.updateTask(reqBody)).rejects.toThrow(
        "Error from repo"
      );
    });
  });
});
