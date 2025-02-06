import express from "express";
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";
import cors from "cors";

const port = 3000;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//Registra as rotas
app.use(userRoutes);
app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server is running...");
});
