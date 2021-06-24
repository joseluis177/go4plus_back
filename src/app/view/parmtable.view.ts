export interface IParmTable {
    name: String,
    apiget: String,
    columns: [
        {
            title: String,
            type: String,
            align: String,
            dataname: String,
            order: Number
        }
    ]
}