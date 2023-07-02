const express = require('express');
const configServer = require('./configs/server.config')
const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config')


const app = express();

// MongoDB connection
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to DB");
})

db.once("open", () => {
    console.log("DB is connected");
})

app.listen(configServer.PORT, () => {
    console.log(`Server starting on port ${configServer.PORT}`);
})