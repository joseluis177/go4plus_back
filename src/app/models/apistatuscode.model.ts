import {Schema, model} from 'mongoose';

const apiStatusCodeShema = new Schema({
    code: {
        type: String,
        require: true,
        unique: true
    },
    status: {
        type: Number,
        require: true
    },
    state: {
        type: Boolean,
        requiere: true
    },
    api: {
        type: String,
        require: true
    },
    method: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    response: {
        type: Object,
        require: false
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('apistatuscode', apiStatusCodeShema)