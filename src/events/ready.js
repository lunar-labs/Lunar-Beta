module.exports = (client, guild) => {
    console.log("log", "Ready!");
    client.user.setPresence({ activity: { name: 'Working On Beta!' }, status: 'idle' })
    .then(console.log)
    .catch(console.error);
  };
