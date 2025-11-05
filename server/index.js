const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());
const Port = 8000;
app.listen(Port,()=>{
    console.log(`server running on the https://localhost:${Port}`)
})