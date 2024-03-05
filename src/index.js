import { Express } from "express";
import taskRouter from "./adapters/routes/TaskRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const PORT = process.env.PORT || 3000;

const app = Express();
app.use(taskRouter);

// Using the errorHandler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Listening to:", PORT);
});
