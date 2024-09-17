const mongoose = require("mongoose");
require('dotenv').config();

async function main(){
    try{
        mongoose.set('strictQuery', true);
        
        const username = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD;
        const uri = `mongodb+srv://${username}:${password}@cluster0.wgrog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 50000,
        });

        console.log('MongoDB conectado com sucesso!');
    } catch(error) {
        console.log(error);
    }
}

module.exports = main;
