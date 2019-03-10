const express = require('express');
var https = require('https');
var fs = require('fs');
const app = express();
var config = require('./config.json');
const oAuthClient = require('disco-oauth');
const client = new oAuthClient(
    config.clientId,               // The Client ID
     config.clientSecret           // The Client Secret
) // Initiate the client.

client.setScopes(['identify','guilds'])             // Set the scopes
client.setRedirect('https://lunar-labs.dev:5134/login') // Set the redirect URI
let port = config.port || 3000;
app.set('port', port);

app.get('/', (req, res)=>{
    res.send(`<a href="${client.getAuthCodeLink()}">Click here to get started</a>`) // Getting the auth code link
})

app.get('/login', async (req, res)=>{
    let code = req.query.code;
    try{
        let key = await client.getAccess(code) // Gets the access token

        console.log(client.getAccessObject(key))    // Get the access token response (really not recommended)

        console.log(await client.getAuthorizedUser(key)) // Gets /users/@me (will log in console)
        res.send(await client.getAuthorizedUserGuilds(key))  // Gets /users/@me/guilds (shows in browser) (pretty ugly)

    }
    catch(error){
        console.log(error)
    }
})

https.createServer({
    key: fs.readFileSync('encryption/private.key'),
    cert: fs.readFileSync('encryption/lunar-labs_dev.crt')
  }, app)
  .listen(port, () => console.info(`Listening on port ${port}`));