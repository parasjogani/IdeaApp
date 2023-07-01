const express = require('express');
const configServer = require('./configs/server.config')


const app = express();

app.listen(configServer.PORT, () => {
    console.log(`Server starting on port ${configServer.PORT}`);
})