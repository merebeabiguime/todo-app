export default class TaskDTO {
  constructor(id, name, dueDate, priority) {
    this.id = id;
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  snapshot() {
    return {
      id: this.id,
      name: this.name,
      dueDate: this.dueDate,
      priority: this.priority,
    };
  }

  static isValid(body) {
    return (
      body.hasOwnProperty("id") &&
      body.hasOwnProperty("name") &&
      body.hasOwnProperty("dueDate") &&
      body.hasOwnProperty("priority")
    );
  }
}
