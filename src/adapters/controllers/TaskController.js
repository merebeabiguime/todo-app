export class TaskController {
  constructor(taskInteractor) {
    this._taskInteractor = taskInteractor;
  }
  async onCreateTask(req, res) {
    try {
      const body = req.body;

      //Validation before sending to Interactor

      const data = await this._taskInteractor.createTask(body);
      return res.status(200).json(data);
    } catch (error) {
      //error handling
    }
  }
  async onUpdateTask(req, res) {
    try {
      const body = req.body;

      //Validation before sending to Interactor

      const data = await this._taskInteractor.updateTask(body);
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
