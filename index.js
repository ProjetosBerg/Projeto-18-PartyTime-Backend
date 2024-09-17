const express = require("express");
const cors = require("cors");
const serviceController = require("./controllers/serviceController");
require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.json());

// DB connection

const conn = require('./db/conn');

// Routes

app.get('/', (req, res) => {
    return res.json("Hello world");
})

app.post("/api/services", (req, res) => serviceController.create(req, res));

app.get("/api/services", (req, res) => serviceController.getAll(req, res));

app.get("/api/services/:id", (req, res) => serviceController.get(req, res));

app.delete("/api/services/:id", (req, res) => serviceController.delete(req, res));

app.put("/api/services/:id", (req, res) => serviceController.udpate(req, res));

conn();

const Port = process.env.PORT || 3000;

app.listen(Port, function(){
    console.log("Servidor online")
})

module.exports = app;