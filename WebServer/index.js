'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/:id', (req,res) => {
    const id = req.params.id;
/*
    if(isNaN()){
        return res.status(404).send("Invalid path");
    }
*/
    res.sendFile(`${id}.html`, {root: __dirname});
});

app.listen(8080, "localhost", () =>{
    console.log("app listening on localhost:8080");
})
