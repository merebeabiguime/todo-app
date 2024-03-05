import { TaskDTO } from "../../domain/dtos/TaskDTO.js";
import { useDatabase } from "../data/dbConnection.js";

export class TaskRepository {
  constructor() {
    this._database = useDatabase();
  }

  async create(body) {
    // Exclude 'id' from the columns and placeholders
    const { id, ...bodyWithoutId } = body;
    //Transforming the body to a valid json array for sql query
    const taskDTOarray = TaskDTO.toArray(bodyWithoutId);
    //Mapping through body to dynamically create the sql request based on the DTO
    const columns = Object.keys(bodyWithoutId).join(", ");
    const placeholders = Object.keys(bodyWithoutId)
      .map(() => "?")
      .join(", ");
    const [rows] = await this._database.query(
      `INSERT INTO task (${columns}) VALUES (${placeholders})`,
      taskDTOarray
    );
    if (rows.affectedRows === 1) {
      return "Task successfully created";
    }
    throw new Error("An error as occured while creating the task");
  }
  async update(body) {
    const { id, ...bodyWithoutId } = body;
    const taskDTOarray = TaskDTO.toArray(bodyWithoutId);
    //Transforming the body to a valid json array for sql query
    // Mapping through body to dynamically create the SET part of the SQL query
    const sets = Object.keys(bodyWithoutId)
      .map((key) => `${key} = ?`)
      .join(", ");
    const [rows] = await this._database.query(
      `UPDATE task SET ${sets} WHERE id = ?`,
      [...taskDTOarray, id]
    );
    if (rows.affectedRows === 1) {
      return "Task successfully updated";
    }
    throw new Error("An error as occured while updating the task");
  }
  async find(id) {
    const [rows] = await this._database.query(
      `SELECT * FROM task WHERE id = ?`,
      [id]
    );
    return rows;
  }
  async getAll() {
    const [rows] = await this._database.query(`SELECT * FROM task`);
    return rows;
  }
  async delete(id) {
    const [rows] = await this._database.query(`DELETE FROM task WHERE id = ?`, [
      id,
    ]);
    if (rows.affectedRows === 1) {
      return "Task successfully delete";
    }
    throw new Error("An error as occured while deleting the task");
  }
}
