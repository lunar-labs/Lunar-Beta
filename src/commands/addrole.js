//Basic Command Template
var db = require("../modules/functions.js");
exports.run = async (client, message, args) => {
    if(message.guild.me.hasPermission("SEND_MESSAGES")){
    let guildid = `${message.guild.id}`;        
    // let member = await message.guild.members.fetch(message.author)
    // let perms = await member.permissions;
    // let addroleperm = await perms.has("MANAGE_ROLES_OR_PERMISSIONS");
            db.cmd('SELECT * FROM permoveride WHERE guildid ="' + guildid + '" and command = "addrole"' , function(rows, fields) {
                               //Change command = "ping" to Command Name              
                const usersRows = JSON.parse(JSON.stringify(rows));
                var usrole = [];
                for(var k in usersRows) {                    
                    usrole.push(usersRows[k].role);
                 }                 if(usrole.length === 0){  
                                 
                                let rolename = args.slice(1).join(" ");                      
                                const member =  message.mentions.members.first();
                                const role = message.guild.roles.find(r => r.name === `${rolename}`);
                                console.log(member);
                                console.log(rolename);
                                 member.roles.add(role);
                                 message.channel.send("Success!");
                                               
                    
                    console.error("1");
                   
                 }else if(message.member.roles.some(r=> usrole.includes(r.name)) ) {
                        console.error("2");
                        return  message.channel.send("pong!").catch(console.error);
                    } else {  

                       console.error("3"); 
                        return message.channel.send("You Shall Not Pass!");
                    
                  }
                });
            }
};
module.exports.help = {
    //Update this Section
    name: "ping",
    category: "misc",
    description: "ping",
    usage: "ping"
}