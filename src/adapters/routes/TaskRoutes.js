import { Express } from "express";
import { TaskController } from "../controllers/TaskController";
import { TaskInteractor } from "../../domain/usecases/TaskInteractor";
import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const repository = new TaskRepository();
const interactor = new TaskInteractor(repository);
const controller = new TaskController(interactor);
const router = Express.Router();

router.get("task/:id", controller.onGetTask);
router.get("task/", controller.onGetTaskList);
router.post("task/create", controller.onCreateTask);
router.patch("task/update", controller.onUpdateTask);
router.delete("task/delete/:id", controller.onDeleteTask);
