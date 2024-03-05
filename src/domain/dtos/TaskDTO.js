export class TaskDTO {
  static isValid(body) {
    if (!body.hasOwnProperty("id")) {
      throw new Error("Body should have an id property");
    }
    if (!Number.isInteger(body.id)) {
      throw new Error("id property should be an integer");
    }
    if (!body.hasOwnProperty("name")) {
      throw new Error("Body should have a name property");
    }
    if (!typeof body.name === "string") {
      throw new Error("name property should be a string");
    }
    if (!body.hasOwnProperty("dueDate")) {
      throw new Error("Body should have a dueDate property");
    }
    if (!typeof body.dueDate === "string") {
      throw new Error("dueDate property should be a string");
    }
    if (!body.hasOwnProperty("priority")) {
      throw new Error("Body should have a priority property");
    }
    if (!typeof body.dueDate === "string") {
      throw new Error("priority property should be a string");
    }

    return true;
  }

  static toArray(body) {
    return [body.name, body.dueDate, body.priority];
  }
}
