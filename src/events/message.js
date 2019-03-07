var con = require("../modules/functions.js");
module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    let guildid = `${message.guild.id}`;
    con.select('SELECT prefix FROM guilds WHERE `guildid`="'+guildid+'"', function(rows) {
      console.log(rows.prefix);
      console.log(guildid);
      // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(rows[0].prefix) !== 0) return;
    
    // Our standard argument/command name definition.
    const args = message.content.slice(rows.prefix).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
  });
    
    
  };