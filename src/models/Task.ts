import mongoose from "../config/db";

const schema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: false },
  stats: {
    type: String,
    required: true,
    enum: ["pendente", "em progresso", "concluida"],
    default: "pendente",
  },
  created_at: { type: Date, default: Date.now() },
  usuario_id: { type: String, required: true },
});

const Task = mongoose.model("Task", schema);

export default Task;
