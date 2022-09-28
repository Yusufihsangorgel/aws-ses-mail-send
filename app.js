const express = require('express');
const app = express();
const port = 3000;
const sendMail = require('./sendMail');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/sendMail', (req, res) => {
    const { to, subject, body } = req.body;
    sendMail(to, subject, body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



