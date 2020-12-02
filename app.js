const express = require('express');
const app = express();
const port = 8000;

app.get('/', (request, response) => {
    response.send(
        'Hello World!'
        + "<br>"
        + "I am Legend!"
        + "<br>"
        + "Hoo, yeaaahhhh!"
    );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});