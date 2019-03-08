const Discord = require("discord.js");
const fs = require("fs");
const mysql = require("mysql2");
const Enmap = require("enmap");
const client = new Discord.Client({
  shardId: process.argv[1],
  shardCount: process.argv[2],
  fetchAllMembers: true
});
const config = require("./config.json");

client.config = config;
client.con = mysql.createConnection({
    host: client.config.mysqlh,
     user: client.config.mysqlu,
  password: client.config.mysqlp, database: client.config.mysqldb, port: client.config.mysqlpor});
require("./modules/functions.js")(client);
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


client.login(config.token);