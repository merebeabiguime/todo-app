export class TaskInteractor {
  constructor(taskRepository) {
    this._taskRepository = taskRepository;
  }
  async createTask(body) {
    const data = await this._taskRepository.create(body);
    if (!data.id) {
      throw new Error("Unable to create a Task");
    }
    return data;
  }
  async updateTask(body) {
    const data = await this._taskRepository.update(body);
    if (!data.id) {
      throw new Error("Unable to update a Task");
    }
    return data;
  }
  async deleteTask(id) {
    const data = await this._taskRepository.delete(id);
    return data;
  }
  async getTaskList() {
    const data = await this._taskRepository.getAll();
    if (data.length === 0) {
      throw new Error("No tasks found");
    }
    return data;
  }
  async getTask(id) {
    const data = await this._taskRepository.find(id);
    if (!data.id) {
      throw new Error("Task not found");
    }
    return data;
  }
}
