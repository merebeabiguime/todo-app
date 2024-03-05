export default class Task {
  constructor({ id, name, dueDate, priority }) {
    if (!this.isValidId(id)) {
      throw new Error("Task id should be positive or null");
    }
    if (!this.isValidName(name)) {
      throw new Error("Task name cannot be empty");
    }
    if (!this.isValidPriority(priority)) {
      throw new Error("Task priority should be either low, medium or high");
    }
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

  // Example: Validation methods
  isValidId(id) {
    return id < 0 ? false : true;
  }
  isValidName(name) {
    return name === "" ? false : true;
  }
  isValidPriority(priority) {
    return ["low", "medium", "high"].includes(priority.toLowerCase());
  }
}
