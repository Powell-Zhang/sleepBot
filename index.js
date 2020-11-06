const Discord = require('discord.js');
const { DateTime } = require("luxon");
const client = new Discord.Client();

const prefix = '~';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Sleepbot is alive!');
})

client.on('message', message =>{
    if(message.author.bot) return;
    //if(message.author.username === 'Cpwg01') return;
    var local = DateTime.local();
    var rezoned = local.setZone("America/New_York");
    var hour = rezoned.hour;
    var time = rezoned.toLocaleString(DateTime.TIME_SIMPLE);
    
    if(hour >= 6 && message.member.roles.cache.has('770825364612186122')) {
      client.commands.get('rise').execute(message);
    }
    if (hour < 6) {
      client.commands.get('sleep').execute(message, time);
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    if (command === 'alive') {
      client.commands.get('alive').execute(message, args);
    }
    if (command === 'time') {
      client.commands.get('time').execute(message, time);
    }
});

const keepAlive = require('./server');
keepAlive();

//must be last line
client.login(process.env.TOKEN);

