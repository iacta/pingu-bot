const Discord = require('discord.js')
exports.run = (client, message, args) => {
let ajuda = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle('Ajuda')
        .setFooter("Pingu BOT - Todos os Direitos Reservados")
        .setDescription(`
          Olá ${message.author}\nMeus comandos são\n 
          p!ping (Verifica a latência do bot)\n
          p!invite (Adciona o bot ao seu servidor)\n
          p!clear (Limpa o chat)\n\n
          Estou sendo desenvolvido, estou em versão beta! Em breve terá mais comandos :D
        `)
        message.channel.send(ajuda)
        return 1;
    }