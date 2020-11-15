const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const discloud = require('discloud-status');

client.login(config.token)
client.on('ready', () => {
  console.log('Estou pronto para ser Usado!');
  client.user.setActivity('p!help')
});
const newLocal = client.on("message", message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === "ajuda")
    {
        let ajuda = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle('Ajuda')
        .setFooter("Pingu BOT - Todos os Direitos Reservados")
        .setDescription(`Olá ${message.author}\nMeus comandos são:\np!ping`)
        message.channel.send(ajuda)
        return 1;
    }
    if(command == "clear")
    {
      const args = message.content.split(' ').slice(1);
      const amount = args.join(' ');
      if (!amount) return message.reply ('Você não informou uma quantidade de mensagens que deveria ser deletada!');
      if (isNaN (amount)) return message.reply ('O parâmetro de quantidade não é um número!');

      if(amount > 100) return message.reply ('Você não pode deletar mais de 100 mensagens de uma vez!'); 
      if(amount < 1) return message.reply ('Você tem que deletar pelo menos 1 mensagem!'); 
      message.channel.messages.fetch({limit: amount}). then (messages => {
      message.channel.bulkDelete (messages)});
      message.channel.send('Chat limpo!')
    return 1;
    }
    if(command == "ping")
    {
      let r = discloud.ram();
      let ping = message.createdTimestamp
      let embed = new Discord.MessageEmbed()
      .setTitle('Latência do bot')
      .setColor(`RANDOM`)
      .setFooter("Pingu BOT - Todos os Direitos Reservados")
      .setDescription(`${message.author}Minha latência é ${ping}ms.\n
      E meu consumo de ram é: ${r}`)
      message.channel.send(embed)
      return 1;
    }
});
client.login(config.token)