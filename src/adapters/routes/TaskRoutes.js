import express from "express";
import { TaskController } from "../controllers/TaskController.js";
import { TaskInteractor } from "../../domain/usecases/TaskInteractor.js";
import { TaskRepository } from "../../infrastructure/repositories/TaskRepository.js";

const repository = new TaskRepository();
const interactor = new TaskInteractor(repository);
const controller = new TaskController(interactor);
const router = express.Router();

router.get("/task/:id", controller.onGetTask.bind(controller));
router.get("/task/", controller.onGetTaskList.bind(controller));
router.post("/task/create", controller.onCreateTask.bind(controller));
router.patch("/task/update", controller.onUpdateTask.bind(controller));
router.delete("/task/delete/:id", controller.onDeleteTask.bind(controller));

export default router;
