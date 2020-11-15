const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const discloud = require('discloud-status');
client.login(config.token)

client.on('ready', () => {
  console.log('Estou pronto para ser Usado!');
});
const newLocal = client.on("message", message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ajuda")
    {
        let ajuda = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle('Ajuda Sky')
        .setFooter("Pingu BOT - Todos os Direitos Reservados")
        .setDescription(`Olá ${message.author}\nMeus comandos são:\np!ping`)
        return 1;
    }
    if(command == "ping")
    {
      message.channel.send("Ping...").then(m =>{
      let r = discloud.ram();
      let ping = m.createdTimestamp
      let ajuda = new Discord.MessageEmbed()
      .setTitle('Latência do bot')
      .setColor(`RANDOM`)
      .setFooter("Pingu BOT - Todos os Direitos Reservados")
      .setDescription(`Minha latência é ${ping}ms.\n
      E meu consumo de ram é: ${r}`)
      message.channel.send(ajuda)
      })
      return 1;
    }
});
client.login(config.token)