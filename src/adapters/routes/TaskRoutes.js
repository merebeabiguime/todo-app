import { Express } from "express";
import { TaskController } from "../controllers/TaskController";

const controller = new TaskController();
const router = Express.Router();

router.get("/:id", controller.onGetTask);
router.get("/", controller.onGetTaskList);
router.post("/create", controller.onCreateTask);
router.patch("/update/:id", controller.onUpdateTask);
router.delete("/delete/:id", controller.onDeleteTask);
