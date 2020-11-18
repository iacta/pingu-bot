const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const discloud = require('discloud-status');
const { random } = require('lodash');

function setStatus(){
  const status = [
  {name: `Utilize: (p!help)`, type:'PLAYING'},
  {name: `Me adcione: (p!invite)`, type: 'PLAYING'}
    ]
  const randomStatus = status[Math.floor(Math.random() * status.length)]
  client.user.setActivity(randomStatus);
  }

client.on('ready', () => {
  console.log('Estou pronto para ser Usado!');
  setStatus();
  setInterval(() => setStatus(), 10000)
});
client.on('message', async (message) => {
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
  
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ajuda")
    {
        let ajuda = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle('Ajuda')
        .setFooter("Pingu BOT - Todos os Direitos Reservados")
        .setDescription(`
          Olá ${message.author}\nMeus comandos são:\n p!ping()`)
        message.channel.send(ajuda)
        return 1;
    }
    if(command == "clear")
    {
      if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('Você precisa ter permissão de gerenciar messagens para usar este comando!');

        const args = message.content.split(' ').slice(1);
        const amount = args.join(' ');
        if (!amount) return message.reply ('Você não informou uma quantidade de menssagens que deveria ser deletada!');
        if (isNaN (amount)) return message.reply ('O parâmetro de quantidade não é um número!');

        if(amount > 100) return message.reply ('Você não pode deletar mais de 100 menssagens de uma vez!'); 
        if(amount < 1) return message.reply ('Você tem que deletar pelo menos 1 menssagem!'); 
        message.channel.messages.fetch({limit: amount}). then (messages => {
        message.channel.bulkDelete (messages)});

        let embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Chat limpo! Total de messagens apagadas: ${amount}`)
        message.channel.send(embed)
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
    if(command == "invite")
    {
      let embed = new Discord.MessageEmbed()
      .setTitle('Invite')
      .setColor(`RANDOM`)
      .setFooter("Pingu BOT - Todos os Direitos Reservados")
      .setDescription('Me adcione clicando neste link:   https://discord.com/api/oauth2/authorize?client_id=777274851462217748&permissions=8&scope=bot')
      message.channel.send(embed)
      return 1;
    }
});
client.login(config.token)