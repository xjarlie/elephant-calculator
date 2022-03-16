const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});