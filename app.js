const express = require('express');
const app = express();
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const port = process.env.port || 3000;

app.use('/', (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

apiController(app);
htmlController(app);

app.listen(port);





