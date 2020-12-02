const express = require('express');
const app = express();
const port = 8000;

// mysql
const mysql = require('mysql');


// handlebars
const exphbs  = require('express-handlebars');
// template engine
app.engine('.hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// static files
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
    // create database connection
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'reyad',
        password: '12345678',
        database: 'express_test'
    })
    conn.connect();

    let name = 'tumpa';
    conn.query('SELECT name FROM person WHERE age=23', function(err, rows, fields) {
        if(err) {
            conn.end();
            throw err;
        }
        name = rows[0]['name'];

        res.render('home', {
            layout: 'base',
            adj: 'awesome',
            creator: name
        });
    });
    conn.end();
});


// start listening
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
