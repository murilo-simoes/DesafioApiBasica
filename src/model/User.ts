import mongoose from '../connection/db';

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Definindo o modelo
const User = mongoose.model('User', schema);

// Exportando o modelo como padrão
export default User;