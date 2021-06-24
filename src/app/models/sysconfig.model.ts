import {Schema, model} from 'mongoose';

const sysConfigSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },    
    type: {
        type: String,
        require: true,
    },
    primary: {
        type: String,
        require: true,
    },
    secondary: {
        type: String,
        require: true,
    },
    text_primary: {
        type: String,
        require: true,
    },
    background_paper: {
        type: String,
        require: true,
    },
    background_default: {
        type: String,
        require: true,
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('sysConfig', sysConfigSchema)