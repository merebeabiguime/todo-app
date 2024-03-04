export default class Task {
  constructor(id, name, dueDate, priority) {
    this._id = id;
    this._name = name;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  snapshot() {
    return {
      id: this._id,
      name: this._name,
      dueDate: this._dueDate,
      priority: this._priority,
    };
  }
}
