import { TaskInteractor } from "./TaskInteractor";
import { faker } from "@faker-js/faker";
import { Factory } from "rosie";

//Initializing mock repository and interactor
var mockTaskRepo = {};
var taskInteractor = {};

const productFactory = new Factory()
  .attr("id", faker.number.int({ min: 1, max: 1000 }))
  .attr("name", faker.person.jobTitle())
  .attr("dueDate", String(faker.date.future()))
  .attr(
    "priority",
    () => ["low", "medium", "high"][Math.floor(Math.random() * 3)]
  );

const createProductList = (limit) => {
  const randomLimit = faker.number.int({ min: 1, max: limit });
  return productFactory.buildList(randomLimit);
};

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

  async getAll() {
    //No need to implement anything here
  }

  async find(id) {
    //No need to implement anything here
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
  describe("get all tasks", () => {
    test("When we try to get all tasks it returns an array of task object", async () => {
      const products = createProductList(10);

      jest.spyOn(mockTaskRepo, "getAll").mockImplementationOnce(() => {
        return products;
      });
      const result = await taskInteractor.getTaskList();
      expect(result).toMatchObject(products);
    });
    test("When there is no task the interactor throws an error", async () => {
      jest.spyOn(mockTaskRepo, "getAll").mockImplementation(() => {
        return [];
      });

      await expect(taskInteractor.getTaskList()).rejects.toThrow(
        "No tasks found"
      );
    });
    test("When there an error from the repo we should be able to catch it", async () => {
      jest.spyOn(mockTaskRepo, "getAll").mockImplementationOnce(() => {
        throw new Error("Error from repo");
      });

      await expect(taskInteractor.getTaskList()).rejects.toThrow(
        "Error from repo"
      );
    });
  });
  describe("get a specific task", () => {
    test("When we try to a task it return the task object", async () => {
      const product = mockProduct();

      jest.spyOn(mockTaskRepo, "find").mockImplementationOnce(() => {
        return product;
      });

      const result = await taskInteractor.getTask(product.id);

      expect(result).toMatchObject(product);
    });
    test("When there is no task the interactor throws an error", async () => {
      jest.spyOn(mockTaskRepo, "find").mockImplementation(() => {
        return {};
      });

      await expect(taskInteractor.getTask()).rejects.toThrow("Task not found");
    });
    test("When there an error from the repo we should be able to catch it", async () => {
      jest.spyOn(mockTaskRepo, "find").mockImplementationOnce(() => {
        throw new Error("Error from repo");
      });

      await expect(taskInteractor.getTask()).rejects.toThrow("Error from repo");
    });
  });
});
