import mongoose, {ConnectionOptions} from 'mongoose';
import config from '../utils/config';
const connStr = `mongodb+srv://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_CLUSTER}/${config.DATABASE_NAME}?${config.DATABASE_OPTIONS}`;
const connStrLocal = `mongodb://${config.DATABASE_LOCAL}/${config.DATABASE_NAME}`;

const mongooseOptions:ConnectionOptions= {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

(async () => {
    if(config.DATABASE_USE==='cloud') {
        await clouddb();
    } else {
        await localdb();
    }
})();

async function localdb() {
    await mongoose.connect(connStrLocal, mongooseOptions)
        .then(db => console.log('app local database connected to..', db.connection.name))
        .catch(err=>console.log(err));
}

async function clouddb() {
    await mongoose.connect(connStr, mongooseOptions)
        .then(db => console.log('app cloud database connected to..', db.connection.name))
        .catch(err=> {
            console.log(err)
            localdb();
        });
}