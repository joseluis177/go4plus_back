const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: "Go4plus API",
            version: "1.0.0",
            description: "Backend API for go4plus app",
            contact: {
                name: "Jose Luis Alfonso Buitrago",
                email: "joseluisalfonsobuitrago@gmail.com" 
            },
            servers:["https://localhost:4200"] 
        } 
    },
    apis:["server.ts"]
}

export default swaggerOptions;