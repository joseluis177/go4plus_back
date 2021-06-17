import mongoose, {ConnectionOptions} from 'mongoose';
import config from '../utils/config';
const connStr = `mongodb+srv://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_CLUSTER}/${config.DATABASE_NAME}?${config.DATABASE_OPTIONS}`;

(async () => {
    const mongooseOptions:ConnectionOptions= {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    };

    await mongoose.connect(connStr, mongooseOptions)
        .then(db => console.log('app database connected to..', db.connection.name))
        .catch(err=>console.log(err));
})();