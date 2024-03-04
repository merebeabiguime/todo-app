import { useDatabase } from "../data/dbConnection";

export class TaskRepository {
  constructor() {
    this._database = useDatabase();
  }

  create(body) {}
  update(body) {}
  find(id) {}
  getAll() {}
  delete(id) {}
}
