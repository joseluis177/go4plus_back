import {Schema, model} from 'mongoose';

const parmEntityShema = new Schema ({
    title: {
        type: String,
        require: true,
        unique: true
    },
    icon: {
        type: String,
        require: true,
    },
    apiroute: {
        type: String,
        require: true,
    },
    index: {
        type: Number,
        require: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('parmentity', parmEntityShema)

