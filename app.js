const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.json());

// DB connection

const conn = require('./db/conn');

// Routes

const routes = require('./routes/router');
app.use("/api", routes);

app.get('/', (req, res) => {
    return res.json("Hello word")
})

conn();

const Port = process.env.PORT || 3000;

app.listen(Port, function(){
    console.log("Servidor online")
})