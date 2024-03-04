export default class Task {
  constructor(name, dueDate, priority) {
    this._name = name;
    this._dueDate = dueDate;
    this._priority = priority;
  }

  snapshot() {
    return {
      name: this._name,
      dueDate: this._dueDate,
      priority: this._priority,
    };
  }
}
