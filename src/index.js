import express from "express";
import taskRouter from "./adapters/routes/TaskRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import bodyParser from "body-parser";

const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(taskRouter);

// Using the errorHandler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening to:", PORT);
});
