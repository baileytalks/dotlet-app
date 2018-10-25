const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/thanks', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/thanks.html'));
});

app.listen(port, () => console.log(`Dotlet listening on port ${port}!`))
