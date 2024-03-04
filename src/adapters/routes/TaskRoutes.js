import { Express } from "express";
import { TaskController } from "../controllers/TaskController";
import { TaskInteractor } from "../../domain/usecases/TaskInteractor";
import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const repository = new TaskRepository();
const interactor = new TaskInteractor(repository);
const controller = new TaskController(interactor);
const router = Express.Router();

router.get("/:id", controller.onGetTask);
router.get("/", controller.onGetTaskList);
router.post("/create", controller.onCreateTask);
router.patch("/update/:id", controller.onUpdateTask);
router.delete("/delete/:id", controller.onDeleteTask);
