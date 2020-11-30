const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { random } = require('lodash');

function setStatus(){
  const status = [
  {name: `Utilize: (p!help)`, type:'PLAYING'},
  {name: `Me adcione: (p!invite)`, type: 'PLAYING'},
  {name: `Estou em ${client.guilds.cache.size} servidores`, type: 1, url: "https://www.twitch.tv/cellbit"}
    ]
  const randomStatus = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(randomStatus);
  }

client.on('ready', () => {
  console.log('Estou pronto para ser Usado!');
  setStatus();
  setInterval(() => setStatus(), 10000)
});
client.on('message', message => {
  if(message.mentions.has(client.user)){
    message.delete(message.author)
    let embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTitle('Menção')
    .setFooter('Pingu BOT - Todos os Direitos Reservados')
    .setDescription(`
    Olá ${message.author}, aki vão algumas dicas para me usar :D\n
    Meu comando de ajuda é:           p!ping\n
    Me adcione clicando neste link:   https://discord.com/api/oauth2/authorize?client_id=777274851462217748&permissions=8&scope=bot\n
    Meu criador é:                    <@580486919029522440>
    `)
    message.channel.send(embed)
}
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./comandos/${command}.js`)
        commandFile.run(client, message, args);
        message.delete(message.author)
    } catch (err) {
    console.error('Erro:' + err);
  }
});
client.login(config.token)