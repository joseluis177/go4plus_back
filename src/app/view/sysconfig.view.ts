export interface ISysConfig {
    name: String,
    type: String,
    primary: String,
    secondary: String,
    text: {
        primary: String
    },
    background: {
        paper: String,
        default: String
    }
}