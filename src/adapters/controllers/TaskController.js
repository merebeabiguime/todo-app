import TaskDTO from "../../domain/dtos/TaskDTO";
import Task from "../../domain/entities/Task";

export class TaskController {
  constructor(taskInteractor) {
    this._taskInteractor = taskInteractor;
  }
  async onCreateTask(req, res, next) {
    try {
      const body = req.body;

      /****Validation before sending to Interactor****/

      //Check if the body matches the data structure of TaskDTO
      if (!TaskDTO.isValid(body)) {
        return res
          .status(400)
          .json({ error: "The body of the request doesn't match TaskDTO" });
      }

      const task = new Task(body);

      const data = await this._taskInteractor.createTask(task.snapshot());
      return res.status(200).json(data);
    } catch (error) {
      next(error); // Pass the error to the next middleware(errorHandler)
    }
  }
  async onUpdateTask(req, res, next) {
    try {
      const body = req.body;

      /****Validation before sending to Interactor****/

      //Check if the body matches the data structure of TaskDTO
      if (!TaskDTO.isValid(body)) {
        return res
          .status(400)
          .json({ error: "The body of the request doesn't match TaskDTO" });
      }
      const task = new Task(body);
      const data = await this._taskInteractor.updateTask(task.snapshot());
      return res.status(200).json(data);
    } catch (error) {
      next(error); // Pass the error to the next middleware(errorHandler)
    }
  }
  async onDeleteTask(req, res, next) {
    try {
      const id = parseInt(req.params.id);

      //Validation before sending to Interactor

      const data = await this._taskInteractor.updateTask(id);
      return res.status(200).json(data);
    } catch (error) {
      next(error); // Pass the error to the next middleware(errorHandler)
    }
  }
  async onGetTaskList(req, res, next) {
    try {
      //Validation before sending to Interactor

      const data = await this._taskInteractor.getTaskList();
      return res.status(200).json(data);
    } catch (error) {
      next(error); // Pass the error to the next middleware(errorHandler)
    }
  }
  async onGetTask(req, res, next) {
    try {
      const id = parseInt(req.params.id);

      //Validation before sending to Interactor

      const data = await this._taskInteractor.getTask(id);
      return res.status(200).json(data);
    } catch (error) {
      next(error); // Pass the error to the next middleware(errorHandler)
    }
  }
}
