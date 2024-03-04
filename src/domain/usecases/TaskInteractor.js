export class TaskInteractor {
  constructor(taskRepository) {
    this._taskRepository = taskRepository;
  }
  async createTask(body) {
    const data = await this._taskRepository.create(body);
    return data;
  }
  async updateTask() {
    const data = await this._taskRepository.update(body);
    return data;
  }
  async deleteTask(id) {
    const data = await this._taskRepository.delete(id);
    return data;
  }
  async getTaskList() {
    const data = await this._taskRepository.getAll();
    return data;
  }
  async getTask(id) {
    const data = await this._taskRepository.find(id);
    return data;
  }
}
