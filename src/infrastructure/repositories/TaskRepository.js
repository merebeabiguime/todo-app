import { TaskDTO } from "../../domain/dtos/TaskDTO.js";
import { useDatabase } from "../data/dbConnection.js";

export class TaskRepository {
  constructor() {
    this._database = useDatabase();
  }

  async create(body) {
    //Transforming the body to a valid json array for sql query
    const taskDTOarray = TaskDTO.toArray(body);
    //Mapping through body to dynamically create the sql request based on the DTO
    const columns = Object.keys(body).join(", ");
    const placeholders = Object.keys(body)
      .map(() => "?")
      .join(", ");
    const [rows] = await this._database.query(
      `INSERT INTO task (${columns}) VALUES (${placeholders})`,
      taskDTOarray
    );
    return rows[0];
  }
  async update(body) {
    //Transforming the body to a valid json array for sql query
    const taskDTOarray = TaskDTO.toArray(body);
    //Adding id at the end for the WHERE clause
    taskDTOarray.push(body.id);
    // Mapping through body to dynamically create the SET part of the SQL query
    const sets = Object.keys(body)
      .map((key) => `${key} = ?`)
      .join(", ");
    const [rows] = await this._database.query(
      `UPDATE task SET ${sets} WHERE id = ?`,
      taskDTOarray
    );
    return rows[0];
  }
  async find(id) {
    const [rows] = await this._database.query(
      `SELECT * FROM task WHERE id = ?`,
      [id]
    );
    return rows[0];
  }
  async getAll() {
    const [rows] = await this._database.query(`SELECT * FROM task`);
    return rows;
  }
  async delete(id) {
    const [rows] = await this._database.query(`DELETE FROM task WHERE id = ?`, [
      id,
    ]);
    return rows[0];
  }
}
