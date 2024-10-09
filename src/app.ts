import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ToDoRouter from "./routers/ToDoRouter"


dotenv.config();

const app = express();

app.use(express.json())
app.use('/', ToDoRouter);

const PORT = process.env.PORT || 3030;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI, {

}).then(() => {
    console.log('MongoDB conectado!');
    
    app.listen(PORT, () =>{
        console.log(`Server rodando em http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log('Falha ao conectar ao MongoDB')
})