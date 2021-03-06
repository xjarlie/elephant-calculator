const express = require('express');
const path = require('path');
const pluralize = require('pluralize');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());

const animals = {
    africanElephant: 'African Elephant', 
    asianElephant: 'Asian Elephant',
    blueWildebeest: 'Blue Wildebeest', 
    africanElephantNewborn: 'Newborn African Elephant',
    asianElephantNewborn: 'Newborn Asian Elephant',
    llama: 'Llama',
    gibbon: 'Gibbon',
    vampireBat: 'Vampire Bat'
}

const mass = {
    africanElephant: 7000,
    asianElephant: 5500,
    africanElephantNewborn: 110,
    asianElephantNewborn: 90,
    blueWildebeest: 250,
    llama: 113,
    gibbon: 13,
    vampireBat: 0.06
};

let pluralAnimals = {};
for (const i in animals) {
    pluralAnimals[i] = pluralize(animals[i]);
}

app.get('/', (req, res) => {
    res.render('index', { animals, mass, pluralAnimals });
});

const sources = [
    ['African Elephant', 'https://www.nationalgeographic.com/animals/mammals/facts/african-elephant'],
    ['Asian Elephant', 'https://www.nationalgeographic.com/animals/mammals/facts/asian-elephant'],
    ['Llama', 'https://www.nationalgeographic.com/animals/mammals/facts/llama-1'],
    ['Blue Wildebeest', 'https://www.nationalgeographic.com/animals/mammals/facts/blue-wildebeest'],
    ['Gibbon', 'https://www.nationalgeographic.com/animals/mammals/facts/gibbons'],
    ['Vampire Bat', 'https://kids.nationalgeographic.com/animals/mammals/facts/vampire-bat']
];

app.get('/sources', (req, res) => {
    res.render('sources', { sources });
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});