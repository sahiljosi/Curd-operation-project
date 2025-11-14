const express =  require ("express")
     const app = express()


    const dotenv = require("dotenv")
    dotenv.config()

     const  apiRouter = require ("./routes/api")

     app.use(express.static("public"))


     app.use(express.json())   // when post api check than use 

     app.use("/api",apiRouter)

    let port = process.env.PORT
     app.listen(port,()=>{
        console.log(`running on port ${port}`)
     })