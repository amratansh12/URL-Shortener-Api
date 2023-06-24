const app = require('../server')
const cors = require('cors')

const corsOptions = {
    "origin": "*",
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    // other options
}

index.use(cors(corsOptions));
module.exports = app;