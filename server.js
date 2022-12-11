const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "/public");

const app = express();

app.use(express.static(initial_path));
app.use('/film', express.static(initial_path));
app.use('/planet', express.static(initial_path));
app.use('/character', express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get("/film/:filmId?", (req, res) => {
    res.sendFile(path.join(initial_path, "page.html"));

})

app.get("/planet/:planetId?", (req, res) => {
    res.sendFile(path.join(initial_path, "planet.html"));
})

app.get("/character/:characterId?", (req, res) => {
    res.sendFile(path.join(initial_path, "character.html"));
})

app.use(function (req, res, next) {
    res.status(404).send('Unable to find the requested resource!');
});


app.listen("3000", () => {
    console.log('listening')
})