import mongoose from "mongoose";
import app from "../src/app.js"

const server_port = 3000;
const database = 'mongodb://127.0.0.1:27017/datakeeper-api';


function trataErro(erro){
    console.log(erro.code)
}
try {

    await mongoose.connect(database)
    
    app.listen(server_port, () => {
        console.log(`Server started on http://localhost:${server_port}`);
    })

} catch (error){
    trataErro(error.cause)
}
   
