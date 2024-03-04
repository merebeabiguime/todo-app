import TaskDTO from "../../domain/dtos/TaskDTO";
import { useDatabase } from "../data/dbConnection";

export class TaskRepository {
  constructor() {
    this._database = useDatabase();
  }

  async create(body) {
    const taskDTOarray = TaskDTO.toArray(body);
    //Mapping through body to dynamically create the request based on the DTO
    const columns = Object.keys(body).join(", ");
    const placeholders = Object.keys(body)
      .map(() => "?")
      .join(", ");
    const [rows] = await _database.query(
      `INSERT INTO task (${columns}) VALUES (${placeholders})`,
      taskDTOarray
    );
  }
  update(body) {}
  find(id) {}
  getAll() {}
  delete(id) {}
}
