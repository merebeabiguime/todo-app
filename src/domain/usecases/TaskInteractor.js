export class TaskInteractor {
  constructor(taskRepository) {
    this._taskRepository = taskRepository;
  }
  async createTask(body) {
    return this._taskRepository.create(body);
  }
  updateTask() {
    return this._taskRepository.create(body);
  }
  deleteTask(id) {
    return this._taskRepository.create(id);
  }
  getTaskList() {
    return this._taskRepository.create(body);
  }
  getTask(id) {
    return this._taskRepository.create(id);
  }
}
