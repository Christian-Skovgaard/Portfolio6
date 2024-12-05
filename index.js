const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());




const port = 3000

app.listen(port, ()=>{
    console.log("it's alive!");
});