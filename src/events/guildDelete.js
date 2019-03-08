module.exports = (client, guild) => {
    console.log("log", `Guild Leave: ${guild.name} (${guild.id}) with ${guild.memberCount}`, "JOINED");
    let guildid = `${guild.id}`;
    client.guildjoinadd(guildid, guildname, guildcreatedAt, guildownerID, guildowner);
  };
