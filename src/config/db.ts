import mongoose, { mongo } from "mongoose";

const mongoUri = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri);

export default mongoose;
