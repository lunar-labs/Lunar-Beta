import { Client, MessageEmbed } from 'discord.js';
export async function run(client, message, args) {
    const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    const members = message.mentions.users.first();
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(`User Info for ${members.tag}`)
      .setThumbnail(`${members.displayAvatarURL()}`)
      // Set the color of the embed
      .setColor(0xFF0000)
      .setTimestamp()
      .setFooter("Info Sent By Lunar Bot")
      .addField("Server Join Date:", `${member.joinedAt}`)
      .addField("Created", `${members.createdAt}`)
      
      // Set the main content of the embed
      .setDescription('Heres the Basic Info You Asked For');
    // Send the embed to the same channel as the message
    await message.channel.send(embed);
}
export const help = {
    name: "userinfo",
    category: "misc",
    description: "Grab Information about a User",
    usage: "userinfo @mention"
}