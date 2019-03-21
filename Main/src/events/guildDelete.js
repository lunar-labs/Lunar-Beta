import { select } from "../modules/functions.js";
export default (client, guild) => {
    console.log("log", `Guild Leave: ${guild.name} (${guild.id}) with ${guild.memberCount}`, "JOINED");
    let guildid = `${guild.id}`;
    select('DELETE FROM guilds WHERE `guildid`="'+guildid+'"', function(rows) {
        console.log("Guild Left successfully");
    
      
  
    });
    
  };
