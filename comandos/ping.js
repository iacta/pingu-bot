const Discord = require('discord.js');
const discloud = require('discloud-status');
exports.run = (client, message, args) => {
    let r = discloud.ram();
    let ping = message.createdTimestamp
    let embed = new Discord.MessageEmbed()
    .setTitle('Latência do bot')
    .setColor(`RANDOM`)
    .setFooter("Pingu BOT - Todos os Direitos Reservados")
    .setDescription(`${message.author}Minha latência é: ${ping}ms.\n
    E meu consumo de ram é: ${r}`)
    message.channel.send(embed)
    return 1;
}