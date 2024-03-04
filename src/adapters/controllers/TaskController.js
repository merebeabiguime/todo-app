export class TaskController {
  constructor(taskInteractor) {
    this._taskInteractor = taskInteractor;
  }
  async onCreateTask(req, res) {}
  async onUpdateTask(req, res) {}
  async onDeleteTask(req, res) {}
  async onGetTaskList(req, res) {}
  async onGetTask(req, res) {}
}
