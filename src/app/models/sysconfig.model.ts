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
    text: {
        primary: {
            type: String,
            require: true,
        }
    },
    background: {
        paper: {
            type: String,
            require: true,
        },
        default: {
            type: String,
            require: true,
        }
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('sysConfig', sysConfigSchema)