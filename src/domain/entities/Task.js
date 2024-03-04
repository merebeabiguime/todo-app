export default class Task {
  constructor(taskDTO) {
    this.taskDTO = taskDTO;
  }

  snapshot() {
    return this.taskDTO.snapshot();
  }
}
