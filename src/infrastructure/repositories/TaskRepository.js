import { useDatabase } from "../data/dbConnection";

export class TaskRepository {
  constructor() {
    this._database = useDatabase();
  }

  create(taskDTO) {}
  update(taskDTO) {}
  find(id) {}
  getAll() {}
  delete(id) {}
}
