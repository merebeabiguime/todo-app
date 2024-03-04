import { Express } from "express";
import taskRouter from "./adapters/routes/TaskRoutes";

const PORT = process.env.PORT || 3000;

const app = Express();
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("Listening to:", PORT);
});
