const Discord = require('discord.js');
const ytdl = require('ytdl-core');
exports.run = (client, message, args) => {
      if(!args[0]) return message.reply("Erro! Utilize 'p!play (link da musica)'");
      else{

      if(message.member.voice.channel){
        const connection = message.member.voice.join();
        connection.play(ytdl(args[0], {filter: 'audioonly', volume: '0.5'}));

      }else{
        message.reply("Erro! Você precisa está em um canal de voz para executar este comando!");
      }
    }
    return 1;
}