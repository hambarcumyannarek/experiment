const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.cookie('myCookiesss', 'hello world', {httpOnly: true, secure: true})
    res.send('hello world')
})

app.listen(4000);