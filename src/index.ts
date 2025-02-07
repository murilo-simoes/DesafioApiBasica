import express from "express";
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

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

//Registra a rota da documentação (swagger)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
