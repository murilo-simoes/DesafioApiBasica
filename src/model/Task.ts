const mongoose = require('../connection/db')

const schema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: false },
  stats: { type: String, required: true, default:"pendente"},
  created_at: { type: Date, default: Date.now() },
});

const Task = mongoose.model('Task', schema);

export default Task;
