const Discord = require('discord.js')
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
      .setTitle('Invite')
      .setColor(`RANDOM`)
      .setFooter("Pingu BOT - Todos os Direitos Reservados")
      .setDescription('Me adcione clicando neste link:   https://discord.com/api/oauth2/authorize?client_id=777274851462217748&permissions=8&scope=bot')
      message.channel.send(embed)
      return 1;
}