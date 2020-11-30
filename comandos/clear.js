const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('Você precisa ter permissão de gerenciar mesagens para usar este comando!');

        const clear = message.content.split(' ').slice(1);
        const amount = clear.join(' ');
        if (!amount) return message.reply ('Você não informou uma quantidade de menssagens que deveria ser deletada!');
        if (isNaN (amount)) return message.reply ('O parametro de quantidade não  um número!');

        if(amount > 100) return message.reply ('Você não pode deletar mais de 100 menssagens de uma vez!'); 
        if(amount < 1) return message.reply ('Você tem que deletar pelo menos 1 menssagem!'); 
        message.channel.messages.fetch({limit: amount}). then (messages => {
        message.channel.bulkDelete (messages)});

        let embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Chat limpo por: ${message.author}! Total de mesagens apagadas: ${amount}`)
        message.channel.send(embed)
      return 1;
    }