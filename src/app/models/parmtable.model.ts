import {Schema, model} from 'mongoose';

const parmTableSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    apiget: {
        type: String,
        require: true
    },
    columns: [
         {
            title: {
                type: String,
                require: true,
            },
            type: {
                type: String,
                require: true,
            },
            align: {
                type: String,
                require: true,
            },
            dataname: {
                type: String,
                require: true,
            },
            order: {
                type: Number,
                require: true,
            }
    }]
}, {
    versionKey: false,
    timestamps: true
});

export default model('parmtable', parmTableSchema)