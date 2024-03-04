import { useDatabase } from "../data/dbConnection";

export class TaskRepository {
  constructor() {
    this._database = useDatabase();
  }

  create({ name, dueDate, priority }) {}
  update({ id, name, dueDate, priority }) {}
  find(id) {}
  getAll() {}
  delete(id) {}
}
