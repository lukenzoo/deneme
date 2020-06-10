const discord = require('discord.js');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
  const Mesaj = new RichEmbed()
    .setDescription("Botun Komutları Gösterilmektedir.")
    .setColor("RANDOM")
    .setTitle("YARDIM")
    .setURL("https://www.youtube.com/channel/UCCk_jRukgLOHrefhUNN38Hw?view_as=subscriber")
      .addField("l!sunucular", "Botun olduğu sunucuları görüntülersiniz.")
      .addField("l!talep", "Destek talebi açar.")
      .addField("l!yetkiliyardım", "Yetkili Komutlarına Ulaşmak İçin")
  .setFooter("Bu bir bitiş açıklaması")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)


message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['genelyardım'],
  permLevel: 0
}

exports.help = {
  name: 'genelyardım'
}