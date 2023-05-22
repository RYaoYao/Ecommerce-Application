const app =require("./App");
const connectDatabase = require("./db/Database");


process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for handling exception`)
})

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"api/config/.env"
    });
}

connectDatabase();

const server = app.listen(process.env.PORT,() => (
    console.log('Listening on PORT 8000')
))

process.on("unhandledRejection", (err)=>{
    console.log(`Shutting down the server for ${err.message}`)
    console.log("shutting down for unhandled promise rejection")

    server.close(()=> {
        process.exit(1);
    })
})