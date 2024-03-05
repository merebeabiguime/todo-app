import TaskDTO from "../../domain/dtos/TaskDTO";
import Task from "../../domain/entities/Task";

export class TaskController {
  constructor(taskInteractor) {
    this._taskInteractor = taskInteractor;
  }
  async onCreateTask(req, res) {
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
      //error handling
    }
  }
  async onUpdateTask(req, res) {
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
      //error handling
    }
  }
  async onDeleteTask(req, res) {
    try {
      const id = parseInt(req.params.id);

      //Validation before sending to Interactor

      const data = await this._taskInteractor.updateTask(id);
      return res.status(200).json(data);
    } catch (error) {
      //error handling
    }
  }
  async onGetTaskList(req, res) {
    try {
      //Validation before sending to Interactor

      const data = await this._taskInteractor.getTaskList();
      return res.status(200).json(data);
    } catch (error) {
      //error handling
    }
  }
  async onGetTask(req, res) {
    try {
      const id = parseInt(req.params.id);

      //Validation before sending to Interactor

      const data = await this._taskInteractor.getTask(id);
      return res.status(200).json(data);
    } catch (error) {
      //error handling
    }
  }
}
