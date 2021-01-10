const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helperes')
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000;

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Heriberto',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Por el servidor ${port}`);
});