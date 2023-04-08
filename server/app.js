const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');
require('dotenv').config();

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to mongodb')
    app.listen(process.env.PORT, () => {
        console.log('Listening on port:', process.env.PORT);
    })
}

main();

app.use(cors());
app.use(express.json());
app.use('/', router);