exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error);
};
exports.help = {
    command: "help",
    name: "ping",
    category: "misc",
    description: "ping",
    usage: "ping"
}