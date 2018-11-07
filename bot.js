const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hi ${client.user.tag} , This Code by : YossiF `);
  console.log('')
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});

const developers = ["350056492117917698"]
const adminprefix = "y";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send(`**Status You ${argresult} **`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
	
if (message.content.startsWith(adminprefix + 'help')) {
  client.on("message", message => {
    message.channel.send(`:dart: ywat
:dart: ylis
:dart: ysetname
:dart: ysetavatar
Thank You Code By Yo[S]siF#7000   :**${argresult}** `);
}
});

client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("508884639474122753");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(`**Welcome  :cupid:  **`);          
}
});



client.login("MzUwMDU2NDkyMTE3OTE3Njk4.DsPKyA.i4Tii0glJW79A0HEo-LKBY8gOT8");
