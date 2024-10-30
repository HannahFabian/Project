const express = require('express')
const axios = require('axios'); 
const app = express()
const https = require("https");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get('/', (req, res) => { 
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get('/engineering', (req, res) => {
    res.render('engineering');
});


app.get('/humanities', (req, res) => {
    res.render('humanities');
});

app.get('/administrative', (req, res) => {
    res.render('administrative');
});

app.get('/medicine', (req, res) => {
    res.render('medicine');
});

app.get('/other', (req, res) => {
    res.render('other');
});


app.listen(2500, () => {
    console.log("Listening on port 2500"); // Para saber que nuestro server no va a crashear.
});