import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://murilorsimoes:ZNwsKiPg7KFYZOJd@desafioapibasica.f36dn.mongodb.net/?retryWrites=true&w=majority&appName=DesafioApiBasica");


export default mongoose