module.exports = (client, guild) => {
    console.log("log", `New guild has been joined: ${guild.name} (${guild.id}) with ${guild.memberCount}`, "JOINED");
    let guildid = `${guild.id}`;
    let guildname = `${guild.name}`;
    let guildcreatedAt = `${guild.createdAt}`;
    let guildownerID = `${guild.ownerID}`;
    let guildowner = `${guild.owner}`;
    client.guildjoinadd(guildid, guildname, guildcreatedAt, guildownerID, guildowner);
  };
  