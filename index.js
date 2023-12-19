const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.cookie('myCookiessss', 'cookieValue', { secure: true, httpOnly: true, sameSite: 'Strict'});
    res.send('hello world')
})

app.listen(4000);