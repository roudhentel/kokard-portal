let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let PORT = process.env.port || 3000;
let http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

let roleRoute = require('./server/routes/role');
app.use('/api/role', roleRoute);

// start with index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/');
});

http.listen(PORT, () => {
    console.log('Listening on ' + PORT);
});