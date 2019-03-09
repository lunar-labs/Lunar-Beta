const express = require('express');
var https = require('https');
var fs = require('fs');
const app = express();

let port = require('./config.json').port || 3000;
app.set('port', port);

const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(session({
    secret: '48738924783748273742398747238',
    resave: false,
    saveUninitialized: false,
    expires: 604800000,
}));
require('./router')(app);

https.createServer({
    key: fs.readFileSync('encryption/private.key'),
    cert: fs.readFileSync('encryption/lunar-labs_dev.crt')
  }, app)
  .listen(port, () => console.info(`Listening on port ${port}`));