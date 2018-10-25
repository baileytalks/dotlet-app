const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(port, () => console.log(`Dotlet listening on port ${port}!`))
