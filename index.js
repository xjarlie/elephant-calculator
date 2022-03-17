const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());

const animals = {
    africanElephant: 'African Elephant', 
    asianElephant: 'Asian Elephant',
    blueWildebeest: 'Blue Wildebeest', 
    africanElephantNewborn: 'Newborn African Elephant',
    asianElephantNewborn: 'Newborn Asian Elephant'
}

app.get('/', (req, res) => {
    res.render('index', { animals });
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});